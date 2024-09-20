import { Component, Input, OnInit } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { UpperCasePipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-face-snap", // Déclare le sélecteur pour le composant, utilisé dans le template HTML parent
  standalone: true, // Indique que le composant est autonome, sans dépendances externes dans ce contexte
  imports: [UpperCasePipe], // Importe le module NgStyle pour gérer les styles dynamiques
  templateUrl: "./face-snap.component.html", // Lien vers le fichier de template HTML du composant
  styleUrl: "./face-snap.component.scss", // Lien vers le fichier de style SCSS du composant
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap; // Le décorateur "Input" déclare une propriété d'entrée qui recevra une instance de FaceSnap depuis le parent

  constructor(private router: Router) {} // Constructeur du composant FaceSnap

  onViewFaceSnap(): void {
    this.router.navigate(["/facesnaps", this.faceSnap.id]); // Redirige l'utilisateur vers la page de détails de l'élément FaceSnap
  }

  /* Fonction alternative qui pourrait être utilisée pour décrémenter manuellement les snaps, si nécessaire
  onSnapMinus(): number {
    if (this.snaps > 0) { // Vérifie si le nombre de snaps est supérieur à 0
      return this.snaps--; // Décrémente si c'est le cas
    } else {
      return this.snaps; // Retourne simplement la valeur si elle est déjà à 0
    }
  } */
}
