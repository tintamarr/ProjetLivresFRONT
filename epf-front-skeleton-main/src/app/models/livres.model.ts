export interface Livres {
  idLivre?: number;
  edition: string;
  titre: string;
  auteur: string;
  resume: string;
  date_parution: Date;
  date_ajout: Date;
  note: number;
  couverture: string;
  genre: string;
  nombre_pages: number;
}
