import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../../services/livre.service';
import { Livres } from '../../models/livres.model';
import { CommentairesService } from 'services/commentaires.service'; // Ajout du service Commentaires
import { Commentaires } from 'models/commentaires.model';
import {UtilisateurService} from "../../services/utilisateur.service";
import {PileALireService} from "../../services/pilealire.service";
import {PilealireDto} from "../../models/dto/pilealireDto";
import {LivresencoursDto} from "../../models/dto/livresencoursDto";
import {LivresEnCoursService} from "../../services/livresencours.service"; // Ajout du modèle Commentaires

@Component({
  selector: 'epf-livre-infos',
  templateUrl: './livre-infos.component.html',
  styleUrls: ['./livre-infos.component.scss']
})
export class LivreInfosComponent implements OnInit {
  livre!: Livres;
  commentaires: Commentaires[] = []; // Liste des commentaires du livre

  constructor(
    private route: ActivatedRoute,
    private livreService: LivreService,
    private commentairesService: CommentairesService, // Injection du service Commentaires
    private utilisateurService: UtilisateurService,
    private pileALireService: PileALireService,
    private livresEnCoursService: LivresEnCoursService
  ) {}

  ngOnInit(): void {
    const livreId = Number(this.route.snapshot.paramMap.get('id'));
    this.getLivreById(livreId);
    this.getCommentaires(livreId); // Récupération des commentaires pour ce livre
  }

  getLivreById(id: number): void {
    this.livreService.findById(id).subscribe((livreReponse: Livres) => {
      this.livre = livreReponse;
    });
  }

  getCommentaires(livreId: number): void {
    this.commentairesService.getCommentairesByLivreId(livreId).subscribe(
      (commentaires: Commentaires[]) => {
        this.commentaires = commentaires;
      },
      (error) => {
        console.error('Erreur lors de la récupération des commentaires :', error);
      }
    );
  }
  ajouterALaPile(): void {
    const utilisateurId = this.utilisateurService.getUtilisateurPrincipalID();
    const livreId = Number(this.route.snapshot.paramMap.get('id'));


    const pilealireDto: PilealireDto = {
      idUtilisateur: utilisateurId,
      idLivre: livreId
    };

    this.pileALireService.createPileALire(pilealireDto).subscribe(response => {
      alert('Livre ajouté à votre pile à lire !');
    }, error => {
      console.error('Erreur lors de l\'ajout du livre à la pile à lire', error);
    });
  }
  ajouterLivreEnCours(): void {
    const utilisateurId = this.utilisateurService.getUtilisateurPrincipalID();
    const livreId = Number(this.route.snapshot.paramMap.get('id'));

    const livresencoursDto: LivresencoursDto = {
      idUtilisateur: utilisateurId,
      idLivre: livreId,
      progression:0
    };

    this.livresEnCoursService.createLivreEnCours(livresencoursDto).subscribe(response => {
      alert('Livre ajouté à vos livres en cours !');
    }, error => {
      console.error('Erreur lors de l\'ajout du livre aux livres en cours', error);
    });
  }



}
/*
 supprimerDeLaPile(): void {
   const livreId = Number(this.route.snapshot.paramMap.get('id'));

   this.pileALireService.deletePileALire(livreId).subscribe(
     () => {
       alert('Livre supprimé de votre pile à lire !');
     },
     (error) => {
       console.error("Erreur lors de la suppression de l'élément de la pile à lire", error);
     }
   );
 }*/
