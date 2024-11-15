import { Component, OnInit } from "@angular/core"
import { Link } from "models/links.model"

@Component({
  selector: "epf-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: Link[] = []

  constructor() {
    this.links.push({ name: "Accueil", href: "" })
    this.links.push({ name: "Mes livres", href: "livres" })
    this.links.push({ name: "Compte", href: "compte" })
  }
}
