import { Component, OnInit } from "@angular/core";
import { LivreService } from "../../services/livre.service";
import { Livres } from "../../models/livres.model";
import { debounceTime, distinctUntilChanged, Subject } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: "epf-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  listeLivres: Livres[] = [];
  searchResults: Livres[] = [];
  searchInput$ = new Subject<string>();

  constructor(private livreService: LivreService, private router: Router) {}

  ngOnInit(): void {
    this.getLivre();
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
}
