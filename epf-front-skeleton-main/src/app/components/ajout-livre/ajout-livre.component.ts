import { Component} from '@angular/core';
import {Livres} from "../../models/livres.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LivreService} from "../../services/livre.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'epf-ajout-livre',
  templateUrl: './ajout-livre.component.html',
  styleUrls: ['./ajout-livre.component.scss']
})
export class AjoutLivreComponent {

  addBookForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AjoutLivreComponent>,
    private fb: FormBuilder,
    private livreService: LivreService
  ) {
    this.addBookForm = this.fb.group({
      titre: ["", Validators.required],
      auteur: ["", Validators.required],
      edition: [""],
      resume: [""],
      genre: [""],
      nombre_pages: [0, Validators.min(1)],
      note: [0, [Validators.min(0), Validators.max(5)]],
      date_parution: [""],
      couverture:[""]
    });
  }

  onSubmit(): void {
    if (this.addBookForm.valid) {
      const dateParutionString = this.addBookForm.get('date_parution')?.value;
      const dateParution = this.convertToDate(dateParutionString);

      const newLivre: Livres = {
        ...this.addBookForm.value,
        date_parution: dateParution,
        date_ajout: new Date(),
      };
      this.livreService.createLivre(newLivre).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  convertToDate(dateString: string): Date | null {
    if (typeof dateString === 'string' && /^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) {
      const [day, month, year] = dateString.split('/').map(Number);
      return new Date(year, month - 1, day);
    }
    return null;
  }
}
