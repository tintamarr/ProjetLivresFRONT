import {Utilisateur} from "./utilisateur.model";
import {Livres} from "./livres.model";

export interface Livresencours {
  idlivresencours?: number;
  utilisateur: Utilisateur;
  livre: Livres;
  progression: number;
}
