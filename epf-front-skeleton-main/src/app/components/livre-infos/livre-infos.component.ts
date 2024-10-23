import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../../services/livre.service';
import { Livres } from '../../models/livres.model';

@Component({
  selector: 'epf-livre-infos',
  templateUrl: './livre-infos.component.html',
  styleUrls: ['./livre-infos.component.scss']
})
export class LivreInfosComponent implements OnInit {
  livre!: Livres;

  constructor(
    private route: ActivatedRoute,
    private livreService: LivreService
  ) {}

  ngOnInit(): void {
    const livreId = Number(this.route.snapshot.paramMap.get('id'));
    this.getLivreById(livreId);
  }

  getLivreById(id: number): void {
    this.livreService.findById(id).subscribe((livreReponse: Livres) => {
      this.livre = livreReponse;
    });
  }
}
