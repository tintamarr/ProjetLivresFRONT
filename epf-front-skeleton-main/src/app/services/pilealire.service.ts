import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pilealire } from "models/pilealire.model";
import { PilealireDto } from "models/dto/pilealireDto";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PileALireService {
  constructor(private http: HttpClient) {}

  private pileALireUrl = "http://localhost:8080/pilealire";

  getAllPileALire(): Observable<Pilealire[]> {
    return this.http.get<Pilealire[]>(this.pileALireUrl);
  }

  createPileALire(pilealireDto: PilealireDto): Observable<Pilealire> {
    return this.http.post<Pilealire>(`${this.pileALireUrl}/create`, pilealireDto);
  }

  deletePileALire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.pileALireUrl}/delete/${id}`);
  }

  findByUtilisateur(idUtilisateur: number): Observable<Pilealire[]> {
    return this.http.get<Pilealire[]>(`${this.pileALireUrl}/utilisateur/${idUtilisateur}`);
  }

  findByLivre(idLivre: number): Observable<Pilealire[]> {
    return this.http.get<Pilealire[]>(`${this.pileALireUrl}/livre/${idLivre}`);
  }

  findById(id: number): Observable<Pilealire> {
    return this.http.get<Pilealire>(`${this.pileALireUrl}/id/${id}`);
  }

  countPileALire(): Observable<number> {
    return this.http.get<number>(`${this.pileALireUrl}/count`);
  }

}
