import { Component, Input, OnInit } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { NgClass, NgStyle } from "@angular/common";

@Component({
  selector: "app-face-snap", // Déclare le sélecteur pour le composant, utilisé dans le template HTML parent
  standalone: true, // Indique que le composant est autonome, sans dépendances externes dans ce contexte
  imports: [NgStyle, NgClass], // Importe le module NgStyle pour gérer les styles dynamiques
  templateUrl: "./face-snap.component.html", // Lien vers le fichier de template HTML du composant
  styleUrl: "./face-snap.component.scss", // Lien vers le fichier de style SCSS du composant
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap; // Le décorateur "Input" déclare une propriété d'entrée qui recevra une instance de FaceSnap depuis le parent

  snapText!: string; // Variable pour stocker le texte du bouton "Snap" ou "Unsnap"
  isSnapped!: boolean; // Booléen pour vérifier si l'utilisateur a déjà "snappé" cet élément

  // Le hook OnInit est déclenché une fois que le composant est initialisé
  ngOnInit(): void {
    this.snapText = "Snap Me"; // Initialisation du texte du bouton
    this.isSnapped = false; // Indique que l'utilisateur n'a pas encore "snappé" l'élément
  }

  // Fonction déclenchée lors du clic sur le bouton "Snap"
  onSnap(): void {
    if (!this.isSnapped) {
      // Si l'élément n'a pas encore été "snappé", on incrémente le compteur de snaps
      this.snap(); // Appelle la fonction snap() pour incrémenter le compteur et mettre à jour le texte du bouton
    } else {
      // Si l'élément a déjà été "snappé", on décrémente le compteur
      this.unSnap(); // Appelle la fonction unSnap() pour décrémenter le compteur et mettre à jour le texte du bouton
    }
  }
  unSnap(): void {
    if (this.isSnapped) {
      // Si l'élément a déjà été "snappé", on décrémente le compteur
      this.faceSnap.removeSnap(); // Diminue le nombre de "snaps" dans l'objet FaceSnap
      this.snapText = "Snap Me"; // Restaure le texte initial du bouton
      this.isSnapped = false; // Repasse l'état à "non-snappé" pour permettre un nouveau "snap"
    }
  }
  snap(): void {
    if (!this.isSnapped) {
      // Si l'élément n'a pas encore été "snappé", on incrémente le compteur de snaps
      this.faceSnap.addSnap(); // Augmente le nombre de "snaps" dans l'objet FaceSnap
      this.snapText = "Unsnap Me"; // Change le texte du bouton pour indiquer que l'utilisateur peut "désnappé"
      this.isSnapped = true; // Passe l'état à "snappé" pour éviter une nouvelle incrémentation immédiate
    }
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
