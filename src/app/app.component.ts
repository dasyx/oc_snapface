import { Component, OnInit } from "@angular/core";
import { FaceSnapComponent } from "./face-snap/face-snap.component"; // Importe le composant FaceSnapComponent pour être utilisé dans ce composant parent
import { FaceSnap } from "./models/face-snap"; // Importe le modèle FaceSnap qui contient les propriétés du "FaceSnap"

@Component({
  selector: "app-root", // Déclare le sélecteur pour ce composant, utilisé dans le fichier index.html ou autre template parent
  standalone: true, // Indique que ce composant est autonome et n'a pas de dépendances supplémentaires
  imports: [FaceSnapComponent], // Indique que le composant FaceSnapComponent est utilisé dans ce composant parent
  templateUrl: "./app.component.html", // Lien vers le template HTML associé à ce composant
  styleUrl: "./app.component.scss", // Lien vers le fichier de style SCSS associé à ce composant
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[]; // Déclare une propriété faceSnaps de type tableau de FaceSnap, initialement vide

  mySnap!: FaceSnap; // Déclare une propriété mySnap de type FaceSnap, initialement non définie
  myOtherSnap!: FaceSnap; // Déclare une autre propriété myOtherSnap de type FaceSnap, initialement non définie

  // Hook du cycle de vie Angular, appelé lors de l'initialisation du composant
  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        "Face Snap", // Titre du snap
        "A simple face snap app", // Description du snap
        "https://picsum.photos/300/300", // URL de l'image à afficher pour ce snap
        new Date(), // Date actuelle lors de l'initialisation du snap
        0 // Nombre initial de snaps (commence à zéro)
      ),
      new FaceSnap(
        "Another Snap", // Titre du snap
        "Another simple face snap app", // Description du snap
        "https://picsum.photos/300/300", // URL de l'image à afficher pour ce snap
        new Date(), // Date actuelle lors de l'initialisation du snap
        120 // Nombre initial de snaps (commence à zéro)
      ),
      new FaceSnap(
        "Yet Another Snap", // Titre du snap
        "Yet another simple face snap app", // Description du snap
        "https://picsum.photos/300/300", // URL de l'image à afficher pour ce snap
        new Date(), // Date actuelle lors de l'initialisation du snap
        1 // Nombre initial de snaps (commence à zéro)
      ),
    ];
    this.faceSnaps[0].setLocation("à la montagne"); // Définit la propriété location du FaceSnap
    // On va afficher cette localisation mais uniquement si elle est définie (location est facultatif, avec le signe "?")
    // Voir dans le composant enfant FaceSnapComponent (face-snap.component.ts) comment afficher cette localisation
  }
}
