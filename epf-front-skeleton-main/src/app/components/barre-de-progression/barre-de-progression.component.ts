import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'epf-barre-de-progression',
  templateUrl: './barre-de-progression.component.html',
  styleUrls: ['./barre-de-progression.component.scss']
})
export class BarreDeProgressionComponent implements OnInit {
  @Input() nombre_pages!: number;  // Nombre total de pages
  @Input() progression!: number;     // Ajout de l'input pour progression
  pourcentage: number = 0;           // Pourcentage affiché
  showPopup: boolean = false;        // Afficher ou non le popup

  ngOnInit() {
    this.calculerPourcentage(); // Calculer le pourcentage à l'initialisation
  }

  openPopup() {
    this.showPopup = true; // Ouvrir le popup
  }

  onPageSaisie(pageActuelle: number) {
    if (this.nombre_pages > 0) {
      this.pourcentage = Math.round((pageActuelle / this.nombre_pages) * 100);
    } else {
      this.pourcentage = 0;
    }
    this.showPopup = false; // Fermer le popup après la saisie
  }

  closePopup() {
    this.showPopup = false; // Fermer le popup
  }

  private calculerPourcentage() {
    if (this.nombre_pages > 0 && this.progression > 0) {
      this.pourcentage = Math.round((this.progression / this.nombre_pages) * 100);
    } else {
      this.pourcentage = 0; // Si aucune page, afficher 0
    }
  }
}
