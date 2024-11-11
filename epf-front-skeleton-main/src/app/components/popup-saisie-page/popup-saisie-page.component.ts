import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'epf-popup-saisie-page',
  templateUrl: './popup-saisie-page.component.html',
  styleUrls: ['./popup-saisie-page.component.scss']
})
export class PopupSaisiePageComponent {
  @Input() isVisible: boolean = false;
  @Output() pageSaisie = new EventEmitter<number>();

  pageActuelle: number = 0;

  submitPage() {
    this.pageSaisie.emit(this.pageActuelle);
    this.closePopup();
  }

  closePopup() {
    this.isVisible = false;
    this.pageActuelle = 0;
  }
}
