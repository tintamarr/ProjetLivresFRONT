import {Utilisateur} from "./utilisateur.model";
import {Livres} from "./livres.model";

export interface Pilealire {
  idPileALire?: number;
  livre: Livres;
  utilisateur: Utilisateur;
}
