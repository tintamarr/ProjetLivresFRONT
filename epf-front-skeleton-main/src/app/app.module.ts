import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NavbarComponent } from "components/navbar/navbar.component"
import { MatListModule } from "@angular/material/list"
import { HomeComponent } from "components/home/home.component"
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { HttpClientModule } from "@angular/common/http";
import { LivresPageComponent } from './components/livres_page/livres-page.component';
import { CompteComponent } from './components/compte/compte.component'
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { PhotoProfilDialogComponent } from './components/photo-profil-dialog/photo-profil-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { LivrePresentationComponent } from './components/livre-presentation/livre-presentation.component';
import { LivreInfosComponent } from './components/livre-infos/livre-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LivresPageComponent,
    CompteComponent,
    PhotoProfilDialogComponent,
    LivrePresentationComponent,
    LivreInfosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
