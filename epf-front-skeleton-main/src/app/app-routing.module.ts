import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "components/home/home.component"
import {LivresPageComponent} from "./components/livres_page/livres-page.component";
import {CompteComponent} from "./components/compte/compte.component";
import {LivresPageResolver} from "./components/livres_page/livres-page.resolver";
import {CompteResolver} from "./components/compte/compte.resolver";
import {LivreInfosComponent} from "./components/livre-infos/livre-infos.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "livres",
    component: LivresPageComponent,
    resolve: {
      students: LivresPageResolver,
    },
  },
  {
    path: "compte",
    component: CompteComponent,
    resolve: {
      students: CompteResolver,
    },
  },
  {
    path: "livre/:id",
    component: LivreInfosComponent,
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
