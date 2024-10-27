import {Component, Input, OnInit} from '@angular/core';
import {LivreService} from "../../services/livre.service";
import {Livres} from "../../models/livres.model";

@Component({
  selector: 'epf-livre-details',
  templateUrl: './livre-presentation.component.html',
  styleUrls: ['./livre-presentation.component.scss']
})
export class LivrePresentationComponent implements OnInit {
  @Input() livreId !: number;
  livre !: Livres;

  //TODO: Faire une fonction qui recherche les nouveautés pour la div du bas
  //TODO: faire les informations à droite
  //TODO: faire en sorte que l'utilisateur soit une variable globale

  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.getLivreById();
  }

  getLivreById(): void{
    this.livreService.findById(this.livreId).subscribe((livreReponse : Livres) => {
      this.livre = livreReponse;
    });
  }

}
