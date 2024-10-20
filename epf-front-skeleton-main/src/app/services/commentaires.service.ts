import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Commentaires } from "models/commentaires.model";
import { CommentairesDto } from "models/dto/commentairesDto";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CommentairesService {
  constructor(private http: HttpClient) {}

  private commentairesUrl = "http://localhost:8080/commentaires";

  createCommentaire(commentaireDto: CommentairesDto): Observable<Commentaires> {
    return this.http.post<Commentaires>(`${this.commentairesUrl}/create`, commentaireDto);
  }

  deleteCommentaire(id: number): Observable<void> {
    return this.http.delete<void>(`${this.commentairesUrl}/delete/${id}`);
  }

  getCommentaireById(id: number): Observable<Commentaires> {
    return this.http.get<Commentaires>(`${this.commentairesUrl}/findCommentaireById/${id}`);
  }

  getAllCommentaires(): Observable<Commentaires[]> {
    return this.http.get<Commentaires[]>(`${this.commentairesUrl}/findAllCommentaires`);
  }

  getCommentairesByUtilisateurId(utilisateurId: number): Observable<Commentaires[]> {
    return this.http.get<Commentaires[]>(`${this.commentairesUrl}/utilisateur/${utilisateurId}`);
  }

  getCommentairesByLivreId(livreId: number): Observable<Commentaires[]> {
    return this.http.get<Commentaires[]>(`${this.commentairesUrl}/livre/${livreId}`);
  }

  getCommentairesByNote(note: number): Observable<Commentaires[]> {
    return this.http.get<Commentaires[]>(`${this.commentairesUrl}/note/${note}`);
  }
}
