import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"
import {LivresComponent} from "./livres/livres.component";
import {CompteComponent} from "./compte/compte.component";
import {LivresResolver} from "./livres/livres.resolver";
import {CompteResolver} from "./compte/compte.resolver";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "livres",
    component: LivresComponent,
    resolve: {
      students: LivresResolver,
    },
  },
  {
    path: "compte",
    component: CompteComponent,
    resolve: {
      students: CompteResolver,
    },
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
