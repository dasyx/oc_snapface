import { Component, OnInit } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import {
  DatePipe,
  NgClass,
  NgStyle,
  TitleCasePipe,
  UpperCasePipe,
  DecimalPipe,
} from "@angular/common";
import { FaceSnapsService } from "../services/face-snaps.service";
import { ActivatedRoute } from "@angular/router";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-single-face-snap", // Déclare le sélecteur pour le composant, utilisé dans le template HTML parent
  standalone: true, // Indique que le composant est autonome, sans dépendances externes dans ce contexte
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    RouterModule,
  ], // Importe le module NgStyle pour gérer les styles dynamiques
  templateUrl: "./single-face-snap.component.html", // Lien vers le fichier de template HTML du composant
  styleUrl: "./single-face-snap.component.scss", // Lien vers le fichier de style SCSS du composant
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap; // Variable pour stocker l'objet FaceSnap passé en entrée
  snapText!: string; // Variable pour stocker le texte du bouton "Snap" ou "Unsnap"
  isSnapped!: boolean; // Booléen pour vérifier si l'utilisateur a déjà "snappé" cet élément
  myLargeNumber: number = 1219723.89; // Variable pour stocker un grand nombre de "snaps" (pour tester la gestion des grands nombres)

  // Injection du service FaceSnapsService dans le constructeur du composant
  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {} // Constructeur du composant FaceSnap

  // Le hook OnInit est déclenché une fois que le composant est initialisé
  ngOnInit(): void {
    this.prepareInterface(); // Initialise les variables et le texte du bouton
    this.getFaceSnap(); // Récupère l'objet FaceSnap correspondant à l'id dans l'URL
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
    if (this.isSnapped && this.faceSnap.id) {
      // Si l'élément a déjà été "snappé", on décrémente le compteur
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "unsnap"); // Diminue le nombre de "snaps" dans l'objet FaceSnap
      this.snapText = "Snap Me"; // Restaure le texte initial du bouton
      this.isSnapped = false; // Repasse l'état à "non-snappé" pour permettre un nouveau "snap"
    }
  }
  snap(): void {
    if (!this.isSnapped && this.faceSnap.id) {
      // Si l'élément n'a pas encore été "snappé" et que l'id est défini
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "snap"); // Augmente le nombre de "snaps"
      this.snapText = "Unsnap Me"; // Change le texte du bouton pour indiquer que l'utilisateur peut "désnappé"
      this.isSnapped = true; // Passe l'état à "snappé"
    }
  }
  // Récupère l'id de l'élément dans l'URL
  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params["id"];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId); // Récupère l'objet FaceSnap correspondant à l'id
  }
  // Initialise les variables et le texte du bouton
  private prepareInterface() {
    this.snapText = "Snap Me"; // Initialisation du texte du bouton
    this.isSnapped = false; // Indique que l'utilisateur n'a pas encore "snappé" l'élément
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
