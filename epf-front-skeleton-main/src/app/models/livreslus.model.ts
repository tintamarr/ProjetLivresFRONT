import {Utilisateur} from "./utilisateur.model";
import {Livres} from "./livres.model";

export interface Livreslus {
  idLivresLus?: number;
  livre: Livres;
  utilisateur: Utilisateur;
}
