import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import {Observable, of} from "rxjs"
import { MajorService } from "services/major.service"
import { Major } from "models/major.model"

@Injectable({
  providedIn: "root",
})
export class LivresResolver implements Resolve<Major[]> {
  //TODO : changer major service avec livresService plus tard en appelant la fct findAll
  constructor(private majorService: MajorService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Major[]> {
    return of([]);
  }
}
