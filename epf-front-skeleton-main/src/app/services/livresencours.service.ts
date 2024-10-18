import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Livresencours } from "models/livresencours.model";
import { LivresencoursDto } from "models/dto/livresencoursDto";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LivresEnCoursService {
  constructor(private http: HttpClient) {}

  private livresEnCoursUrl = "http://localhost:8080/livresencours";

  getAllLivresEnCours(): Observable<Livresencours[]> {
    return this.http.get<Livresencours[]>(this.livresEnCoursUrl);
  }

  createLivreEnCours(livresencoursDto: LivresencoursDto): Observable<Livresencours> {
    return this.http.post<Livresencours>(`${this.livresEnCoursUrl}/create`, livresencoursDto);
  }

  deleteLivreEnCours(id: number): Observable<void> {
    return this.http.delete<void>(`${this.livresEnCoursUrl}/delete/${id}`);
  }

  findByUtilisateur(idUtilisateur: number): Observable<Livresencours[]> {
    return this.http.get<Livresencours[]>(`${this.livresEnCoursUrl}/utilisateur/${idUtilisateur}`);
  }

  findByLivre(idLivre: number): Observable<Livresencours[]> {
    return this.http.get<Livresencours[]>(`${this.livresEnCoursUrl}/livre/${idLivre}`);
  }

  findById(id: number): Observable<Livresencours> {
    return this.http.get<Livresencours>(`${this.livresEnCoursUrl}/id/${id}`);
  }

  countLivresEnCours(): Observable<number> {
    return this.http.get<number>(`${this.livresEnCoursUrl}/count`);
  }
}
