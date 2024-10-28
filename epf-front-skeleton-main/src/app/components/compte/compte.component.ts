import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Utilisateur } from '../../models/utilisateur.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {PhotoProfilDialogComponent} from "../photo-profil-dialog/photo-profil-dialog.component";


@Component({
  selector: 'epf-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {
  public utilisateurCompte!: Utilisateur;
  public image_path = "";
  public utilisateurForm: FormGroup;

  constructor(
    private utilisateurService: UtilisateurService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.utilisateurForm = this.fb.group({
      pseudo: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      datenaissance: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurById(this.utilisateurService.getUtilisateurPrincipalID()).subscribe(utilisateur => {
      this.utilisateurCompte = utilisateur;
      this.image_path = "assets/pp/pp_humains_" + this.utilisateurCompte.photo_profil + ".png";
      this.utilisateurForm.patchValue(this.utilisateurCompte);
    });
  }

  onSubmit($event: SubmitEvent): void {
    if (this.utilisateurForm.valid) {
      const updatedUtilisateur: Utilisateur = {
        idUtilisateur: this.utilisateurCompte.idUtilisateur,
        pseudo: this.utilisateurForm.get('pseudo')?.value,
        nom: this.utilisateurForm.get('nom')?.value,
        prenom: this.utilisateurForm.get('prenom')?.value,
        mail: this.utilisateurForm.get('mail')?.value,
        datenaissance: this.utilisateurForm.get('datenaissance')?.value,
        photo_profil: this.utilisateurCompte.photo_profil
      };

      this.utilisateurService.updateUtilisateur(this.utilisateurCompte.idUtilisateur, updatedUtilisateur).subscribe(
        (value) => {
          this.utilisateurCompte = value;
          this.showNotification('Mise à jour réussie !');
        },
        (error) => {
          this.showNotification('Échec de la mise à jour. Veuillez réessayer.');
        }
      );
    }
  }

  openPhotoProfilDialog(): void {
    const dialogRef = this.dialog.open(PhotoProfilDialogComponent, {
      width: '700px',
      data: { currentPhoto: this.utilisateurCompte.photo_profil }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.utilisateurCompte.photo_profil = result;
        this.image_path = "assets/pp/pp_humains_" + this.utilisateurCompte.photo_profil + ".png";
        this.updatePhotoProfil();
      }
    });
  }

  private updatePhotoProfil(): void {
    const updatedUtilisateur: Utilisateur = {
      ...this.utilisateurCompte,
      photo_profil: this.utilisateurCompte.photo_profil
    };

    this.utilisateurService.updateUtilisateur(this.utilisateurCompte.idUtilisateur, updatedUtilisateur).subscribe();
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
