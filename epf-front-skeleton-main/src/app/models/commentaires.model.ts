import {Utilisateur} from "./utilisateur.model";
import {Livres} from "./livres.model";


export interface Commentaires {
  idCommentaire?: number;
  utilisateur: Utilisateur;
  livres: Livres;
  commentaire?: string;
  noteUnique: number;
  statut: boolean;
}
