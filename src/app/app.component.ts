import { Component } from "@angular/core";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: "app-root", // Déclare le sélecteur pour ce composant, utilisé dans le fichier index.html ou autre template parent
  standalone: true, // Indique que ce composant est autonome et n'a pas de dépendances supplémentaires
  imports: [FaceSnapListComponent, HeaderComponent], // Indique que le composant FaceSnapComponent est utilisé dans ce composant parent
  templateUrl: "./app.component.html", // Lien vers le template HTML associé à ce composant
  styleUrl: "./app.component.scss", // Lien vers le fichier de style SCSS associé à ce composant
})
export class AppComponent {}
