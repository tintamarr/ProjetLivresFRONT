import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'epf-barre-de-progression',
  templateUrl: './barre-de-progression.component.html',
  styleUrls: ['./barre-de-progression.component.scss']
})
export class BarreDeProgressionComponent implements OnInit {
  @Input() nombre_pages!: number;
  @Input() progression!: number;
  pourcentage: number = 0;
  showPopup: boolean = false;

  ngOnInit() {
    this.calculerPourcentage();
  }

  openPopup() {
    this.showPopup = true;
  }

  onPageSaisie(pageActuelle: number) {
    if (this.nombre_pages > 0) {
      this.pourcentage = Math.round((pageActuelle / this.nombre_pages) * 100);
    } else {
      this.pourcentage = 0;
    }
    this.showPopup = false;
  }

  closePopup() {
    this.showPopup = false;
  }

  private calculerPourcentage() {
    if (this.nombre_pages > 0 && this.progression > 0) {
      this.pourcentage = Math.round((this.progression / this.nombre_pages) * 100);
    } else {
      this.pourcentage = 0;
    }
  }
}
