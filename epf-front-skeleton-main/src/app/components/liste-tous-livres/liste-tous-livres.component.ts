import { Component, Inject, OnInit } from '@angular/core';
import { Livres } from "../../models/livres.model";
import { LivreService } from "../../services/livre.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'epf-liste-tous-livres',
  templateUrl: './liste-tous-livres.component.html',
  styleUrls: ['./liste-tous-livres.component.scss']
})
export class ListeTousLivresComponent implements OnInit {
  listeLivres: Livres[] = [];

  constructor(
    private livreService: LivreService,
    public dialogRef: MatDialogRef<ListeTousLivresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.livreService.findAll().subscribe((livres) => {
      this.listeLivres = livres;
    });
  }

  onLivreSelected(livre: Livres): void {
    this.dialogRef.close(livre);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
