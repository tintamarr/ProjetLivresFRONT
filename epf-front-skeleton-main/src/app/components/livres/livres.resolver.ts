import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import {Observable} from "rxjs"
import { Livres } from "models/livres.model"
import {LivreService} from "../../services/livre.service";

@Injectable({
  providedIn: "root",
})
export class LivresResolver implements Resolve<Livres[]> {
  constructor(private livreService: LivreService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Livres[]> {
    return this.livreService.findAll();
  }
}
