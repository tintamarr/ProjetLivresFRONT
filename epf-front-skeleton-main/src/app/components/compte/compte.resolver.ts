import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import {Observable} from "rxjs"
import {UtilisateurService} from "../../services/utilisateur.service";
import {Utilisateur} from "../../models/utilisateur.model";

@Injectable({
  providedIn: "root",
})
export class CompteResolver implements Resolve<Utilisateur[]> {
  constructor(private utilisateurService: UtilisateurService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Utilisateur[]> {
    return this.utilisateurService.findAllUtilisateurs();
  }
}
