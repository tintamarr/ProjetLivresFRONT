import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "components/home/home.component"
import {LivresComponent} from "./components/livres/livres.component";
import {CompteComponent} from "./components/compte/compte.component";
import {LivresResolver} from "./components/livres/livres.resolver";
import {CompteResolver} from "./components/compte/compte.resolver";

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
