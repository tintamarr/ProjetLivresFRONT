import { Component, OnInit } from "@angular/core";
import { LivreService } from "../../services/livre.service";
import { Livres } from "../../models/livres.model";
import { debounceTime, distinctUntilChanged, Subject } from "rxjs";
import { Router } from '@angular/router';
import { LivresEnCoursService } from "../../services/livresencours.service";
import { UtilisateurService } from "../../services/utilisateur.service";
import {MatDialog} from "@angular/material/dialog";
import {AjoutLivreComponent} from "../ajout-livre/ajout-livre.component";

@Component({
  selector: "epf-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  listeLivres: Livres[] = [];
  searchResults: Livres[] = [];
  searchInput$ = new Subject<string>();
  livreSelectionne!: Livres;
  searchPerformed = false;


  //TODO : faire la barre de progression
  //TODO: mettre la liste des listes en liste des nouveautés (en passant par le back)
  //TODO: faire le read-me qui explique le backend
  //TODO : voir le problème avec la date dans add

  constructor(
    private livreService: LivreService,
    private livresEnCoursService: LivresEnCoursService,
    private utilisateurService: UtilisateurService,
    private router: Router,
    public dialog: MatDialog
  ) {}

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
        this.searchPerformed = false;
      }
    });
  }

  getLivre(): void {
    this.livreService.findAll().subscribe((livresReponse) => {
      this.listeLivres = livresReponse;
    });
  }

  getLivreSelection(): void {
    this.livresEnCoursService.findByUtilisateur(this.utilisateurService.getUtilisateurPrincipalID())
      .subscribe(livreencoursListe => {
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
    this.searchPerformed = true;
    this.searchResults = this.listeLivres.filter((livre) =>
      livre.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      livre.auteur.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  onLivreSelected(livre: Livres): void {
    this.router.navigate(['/livre', livre.idLivre]);
    this.searchResults = [];
  }

  redirectionMesLivres(): void {
    this.router.navigate(['/livres']);
  }

  openPopUpAjoutLivre(): void {
    const dialogRef = this.dialog.open(AjoutLivreComponent, {
      width: "75%",
      maxWidth: "80vw",
      maxHeight: '80vh'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getLivre();
      }
    });
  }
}
