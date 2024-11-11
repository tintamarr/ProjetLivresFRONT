import { Component, OnInit } from '@angular/core';
import { LivresEnCoursService } from '../../services/livresencours.service';
import { Livresencours } from '../../models/livresencours.model';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Pilealire } from '../../models/pilealire.model';
import { PileALireService } from '../../services/pilealire.service';
import { LivresLusService } from '../../services/livreslus.service';
import { Livreslus } from '../../models/livreslus.model';

@Component({
  selector: 'epf-livres-page',
  templateUrl: './livres-page.component.html',
  styleUrls: ['./livres-page.component.scss']
})
export class LivresPageComponent implements OnInit {
  livresEnCours: Livresencours[] = [];
  pileALire: Pilealire[] = [];
  livresLus: Livreslus[] = [];

  isPopupVisible: boolean = false;
  //livreEnCoursSelectionne!: Livresencours;

  constructor(
    private livresEnCoursService: LivresEnCoursService,
    private utilisateurService: UtilisateurService,
    private pileALireService: PileALireService,
    private livresLusService: LivresLusService
  ) {
  }

  ngOnInit(): void {
    this.getLivresEnCours();
    this.getPileALire();
    this.getLivresLus();
    this.getNombreLivresLus();
  }

  getLivresEnCours(): void {
    const utilisateurID = this.utilisateurService.getUtilisateurPrincipalID();
    this.livresEnCoursService.findByUtilisateur(utilisateurID).subscribe((livres: Livresencours[]) => {
      this.livresEnCours = livres;
    });
  }

  getPileALire(): void {
    const utilisateurID = this.utilisateurService.getUtilisateurPrincipalID();
    this.pileALireService.findByUtilisateur(utilisateurID).subscribe((pile: Pilealire[]) => {
      this.pileALire = pile;
    });
  }

  getLivresLus(): void {
    const utilisateurID = this.utilisateurService.getUtilisateurPrincipalID();
    this.livresLusService.findByUtilisateur(utilisateurID).subscribe((livresLus: Livreslus[]) => {
      this.livresLus = livresLus;
    });
  }

  getNombreLivresLus(): number {
    return this.livresLus.length;
  }

  onProgressBarClick(livreEnCours: Livresencours) {
    //this.livreEnCoursSelectionne = livreEnCours;
    this.isPopupVisible = true;
  }




}
