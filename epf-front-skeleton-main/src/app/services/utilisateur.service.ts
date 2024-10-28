import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Utilisateur } from "models/utilisateur.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UtilisateurService {
  private utilisateurPrincipalID = 1;
  constructor(private http: HttpClient) {}

  private utilisateurUrl = "http://localhost:8080/utilisateurs";

  createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.utilisateurUrl}/create`, utilisateur);
  }

  deleteUtilisateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.utilisateurUrl}/delete/${id}`);
  }

  countUtilisateurs(): Observable<number> {
    return this.http.get<number>(`${this.utilisateurUrl}/count`);
  }

  findAllUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.utilisateurUrl);
  }

  getUtilisateurById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.utilisateurUrl}/${id}`);
  }

  getUtilisateurByNom(nom: string): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.utilisateurUrl}/nom/${nom}`);
  }

  updateUtilisateur(id: number, utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.utilisateurUrl}/update/${id}`, utilisateur);
  }

  getUtilisateurPrincipalID():number{
    return this.utilisateurPrincipalID;
  }
}
