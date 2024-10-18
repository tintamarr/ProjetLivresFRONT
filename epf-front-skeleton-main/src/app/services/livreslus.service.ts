import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Livreslus } from "models/livreslus.model";
import { LivreslusDto } from "models/dto/livreslusDto";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LivresLusService {
  constructor(private http: HttpClient) {}

  private livresLusUrl = "http://localhost:8080/livreslus";

  getAllLivresLus(): Observable<Livreslus[]> {
    return this.http.get<Livreslus[]>(this.livresLusUrl);
  }

  createLivresLus(livreslusDto: LivreslusDto): Observable<Livreslus> {
    return this.http.post<Livreslus>(`${this.livresLusUrl}/create`, livreslusDto);
  }

  deleteLivresLus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.livresLusUrl}/delete/${id}`);
  }

  findByUtilisateur(idUtilisateur: number): Observable<Livreslus[]> {
    return this.http.get<Livreslus[]>(`${this.livresLusUrl}/utilisateur/${idUtilisateur}`);
  }

  findByLivre(idLivre: number): Observable<Livreslus[]> {
    return this.http.get<Livreslus[]>(`${this.livresLusUrl}/livre/${idLivre}`);
  }

  findById(id: number): Observable<Livreslus> {
    return this.http.get<Livreslus>(`${this.livresLusUrl}/id/${id}`);
  }

  countLivresLus(): Observable<number> {
    return this.http.get<number>(`${this.livresLusUrl}/count`);
  }
}
