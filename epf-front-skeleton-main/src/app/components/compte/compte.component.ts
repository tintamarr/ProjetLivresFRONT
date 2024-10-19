import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from "../../services/utilisateur.service";
import {Utilisateur} from "../../models/utilisateur.model";

@Component({
  selector: 'epf-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})

//TODO : mettre des input à la place des noms pour pouvoir modifié et peut etre ne pas mettre dans un cadre
export class CompteComponent implements OnInit {

  public utilisateurCompte!: Utilisateur;
  public image_path ="";

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurById(1).subscribe(utilisateur =>  {
      this.utilisateurCompte = utilisateur;
      this.image_path = "assets/pp/pp_humains_" + this.utilisateurCompte.photo_profil + ".png";
      }
    );

  }

}
