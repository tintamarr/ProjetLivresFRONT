import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'epf-popup-saisie-page',
  templateUrl: './popup-saisie-page.component.html',
  styleUrls: ['./popup-saisie-page.component.scss']
})
export class PopupSaisiePageComponent {
  pageActuelle: number = 0;
  isPopupVisible: boolean = false; // Variable pour contrôler la visibilité du popup

  @Output() pageSaisie = new EventEmitter<number>();

  // Méthode pour ouvrir le popup
  openPopup() {
    this.isPopupVisible = true;
  }

  // Méthode pour envoyer la page saisie et fermer le popup
  submitPage() {
    this.pageSaisie.emit(this.pageActuelle);
    this.closePopup();
  }

  // Méthode pour fermer le popup
  closePopup() {
    this.isPopupVisible = false; // Masquer le popup
    this.pageActuelle = 0;       // Réinitialiser la valeur
  }
}
