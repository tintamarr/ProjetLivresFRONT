import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'epf-photo-profil-dialog',
  templateUrl: './photo-profil-dialog.component.html',
  styleUrls: ['./photo-profil-dialog.component.scss']
})
export class PhotoProfilDialogComponent {
  photos = [1, 2, 3];

  constructor(
    public dialogRef: MatDialogRef<PhotoProfilDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { currentPhoto: number }
  ) {}

  onSelect(photo: number): void {
    this.dialogRef.close(photo);
  }
}
