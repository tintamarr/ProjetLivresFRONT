import { Component, OnInit } from '@angular/core';
import { LivresEnCoursService } from '../../services/livresencours.service';
import { Livresencours } from '../../models/livresencours.model';

@Component({
  selector: 'epf-livres-page',
  templateUrl: './livres-page.component.html',
  styleUrls: ['./livres-page.component.scss']
})
export class LivresPageComponent implements OnInit {
  livresEnCours: Livresencours[] = [];

  constructor(private livresEnCoursService: LivresEnCoursService) {}

  ngOnInit(): void {
    this.getLivresEnCours();
  }

  getLivresEnCours(): void {
    this.livresEnCoursService.getAllLivresEnCours().subscribe((livres: Livresencours[]) => {
      this.livresEnCours = livres;
    });
  }
}
