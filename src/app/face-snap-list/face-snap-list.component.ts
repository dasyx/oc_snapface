// Importation des décorateurs et des classes nécessaires depuis Angular.
import { Component, OnInit } from "@angular/core";
// Importation du composant FaceSnapComponent pour être utilisé dans ce composant parent.
// Dans la nouvelle architecture standalone, chaque composant peut être autonome, d'où l'importation directe du composant enfant.
import { FaceSnapComponent } from "../face-snap/face-snap.component";
// Importation du modèle FaceSnap, qui définit les propriétés et la structure d'un "FaceSnap".
import { FaceSnap } from "../models/face-snap";
// Importation du service FaceSnapsService pour obtenir les données des "FaceSnaps".
import { FaceSnapsService } from "../services/face-snaps.service";

@Component({
  // 'selector' définit le nom de balise HTML personnalisée avec laquelle ce composant peut être utilisé dans d'autres templates.
  selector: "app-face-snap-list",
  // La propriété 'standalone: true' signifie que ce composant est autonome.
  // Il n'a pas besoin d'être déclaré dans un module et peut gérer ses propres dépendances, simplifiant ainsi l'architecture.
  standalone: true,
  // 'imports' permet d'importer d'autres composants standalone (comme FaceSnapComponent),
  // qui sont ensuite utilisés dans le template de ce composant.
  imports: [FaceSnapComponent],
  // 'templateUrl' fait référence au fichier HTML contenant la structure de ce composant.
  templateUrl: "./face-snap-list.component.html",
  // 'styleUrl' fait référence au fichier de styles SCSS associé à ce composant.
  styleUrl: "./face-snap-list.component.scss",
})
export class FaceSnapListComponent implements OnInit {
  // Déclaration d'une propriété 'faceSnaps', un tableau de FaceSnap qui sera utilisé pour stocker les données des "FaceSnaps".
  // Le point d'exclamation (!) indique que cette propriété sera initialisée plus tard (typage strict activé avec TypeScript).
  faceSnaps!: FaceSnap[];

  // Injection du service FaceSnapsService dans le constructeur du composant.
  // Cela permet d'accéder aux données des "FaceSnaps" à partir du service.
  constructor(private faceSnapsService: FaceSnapsService) {}

  // Déclaration de la propriété 'mySnap' de type FaceSnap, initialement non définie,
  // qui représentera un "FaceSnap" spécifique dans le composant.
  mySnap!: FaceSnap;

  // Déclaration de la propriété 'myOtherSnap' de type FaceSnap, également non définie au départ,
  // servant à gérer un autre "FaceSnap" spécifique.
  myOtherSnap!: FaceSnap;

  // 'ngOnInit' est une méthode du cycle de vie des composants Angular,
  // appelée automatiquement lors de l'initialisation du composant.
  // Ici, on initialise la propriété 'faceSnaps' en tant que tableau vide.
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
    // Ici, on essaie d'utiliser la méthode 'setLocation' sur le premier élément du tableau faceSnaps.
    // Cependant, comme le tableau est initialisé vide, cela pourrait causer une erreur.
    // Il est donc nécessaire de vérifier que le tableau contient des éléments avant de modifier une propriété.
  }
}
