import { Component, OnInit } from "@angular/core";
import { LivreService } from "../../services/livre.service";
import { Livres } from "../../models/livres.model";
import { debounceTime, distinctUntilChanged, Subject } from "rxjs";
import { Router } from '@angular/router';
import {LivresEnCoursService} from "../../services/livresencours.service";

@Component({
  selector: "epf-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  listeLivres: Livres[] = [];
  searchResults: Livres[] = [];
  searchInput$ = new Subject<string>();
  livreSelectionne !: Livres;


  //TODO : faire la barre de progression
  //TODO : faire un bouton add pour pouvoir ajouter un livre
  //TODO: progress bar

  constructor(private livreService: LivreService, private livresEnCoursService : LivresEnCoursService, private router: Router) {}

  ngOnInit(): void {
    this.getLivre();
    this.getLivreSelection();
    this.searchInput$.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((searchTerm) => {
      if (searchTerm) {
        this.searchLivre(searchTerm);
      } else {
        this.searchResults = [];
      }
    });
  }

  getLivre(): void {
    this.livreService.findAll().subscribe((livresReponse) => {
      this.listeLivres = livresReponse;
    });
  }

  getLivreSelection(): void{
    this.livresEnCoursService.findByUtilisateur(1).subscribe( livreencoursListe =>{
      let livreencours;
      if (livreencoursListe) {
        livreencours = livreencoursListe[0];
        const idLivre = livreencours.livre.idLivre;
        if (idLivre !== undefined) {
          this.livreService.findById(idLivre).subscribe(livre => this.livreSelectionne = livre);
        }
      }
    });
  }

  onSearchInput(event: any): void {
    const searchTerm = event.target.value.trim();
    this.searchInput$.next(searchTerm);
  }
  searchLivre(searchTerm: string): void {
    this.searchResults = this.listeLivres.filter((livre) =>
      livre.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      livre.auteur.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  onLivreSelected(livre: Livres): void {
    console.log("Livre sélectionné :", livre);
    this.router.navigate(['/livre', livre.idLivre]);
    this.searchResults = [];
  }


  redirectionMesLivres():void {
    this.router.navigate(['/livres']);
  }
}
