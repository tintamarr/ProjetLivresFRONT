import { Component, OnInit } from "@angular/core"
import {LivreService} from "../../services/livre.service";
import {Livres} from "../../models/livres.model";

@Component({
  selector: "epf-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  listeLivres !: Livres[] ;
  constructor(private livreService: LivreService) {
  }

  ngOnInit(): void {
    this.getLivre();
  }

  getLivre(): void{
    this.livreService.findAll().subscribe(livresReponse =>{
        this.listeLivres = livresReponse;
      });
  }

}

