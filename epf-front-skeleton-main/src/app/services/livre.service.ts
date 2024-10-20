import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Livres } from "models/livres.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LivreService {
  constructor(private http: HttpClient) {}

  private livreUrl = "http://localhost:8080/livres";

  findAll(): Observable<Livres[]> {
    return this.http.get<Livres[]>(this.livreUrl);
  }

  createLivre(livre: Livres): Observable<Livres> {
    return this.http.post<Livres>(`${this.livreUrl}/create`, livre);
  }

  deleteLivre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.livreUrl}/delete/${id}`);
  }

  findByTitre(titre: string): Observable<Livres[]> {
    return this.http.get<Livres[]>(`${this.livreUrl}/titre/${titre}`);
  }

  findByAuteur(auteur: string): Observable<Livres[]> {
    return this.http.get<Livres[]>(`${this.livreUrl}/auteur/${auteur}`);
  }

  findByEdition(edition: string): Observable<Livres[]> {
    return this.http.get<Livres[]>(`${this.livreUrl}/edition/${edition}`);
  }

  findByGenre(genre: string): Observable<Livres[]> {
    return this.http.get<Livres[]>(`${this.livreUrl}/genre/${genre}`);
  }

  findById(id: number): Observable<Livres> {
    return this.http.get<Livres>(`${this.livreUrl}/id/${id}`);
  }

  countLivres(): Observable<number> {
    return this.http.get<number>(`${this.livreUrl}/count`);
  }
}
