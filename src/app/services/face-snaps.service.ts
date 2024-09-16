// Importation des décorateurs 'inject' et 'Injectable' depuis Angular.
// 'inject' permet l'injection de dépendances, tandis que 'Injectable' est un décorateur
// utilisé pour rendre un service disponible pour l'injection dans d'autres composants ou services.
import { inject, Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

// Le décorateur '@Injectable' rend la classe 'FaceSnapsService' injectable partout dans l'application.
// Le paramètre 'providedIn: "root"' indique que ce service est globalement fourni au niveau de la racine de l'application,
// ce qui signifie qu'il sera disponible pour tous les composants et services sans avoir besoin de le déclarer dans un module spécifique.
@Injectable({
  providedIn: "root",
})
export class FaceSnapsService {
  // Déclaration d'une propriété privée 'faceSnaps', un tableau d'instances de 'FaceSnap'.
  // Ce tableau contient les données d'exemple, représentant une liste de "snaps" (photos) avec leurs descriptions,
  // URL d'image, date de création et nombre de "snaps" (indicateur de popularité).
  // L'utilisation de 'private' garantit que ce tableau ne peut être modifié que depuis cette classe,
  // protégeant ainsi l'intégrité des données.
  private faceSnaps: FaceSnap[] = [
    // Création de trois objets 'FaceSnap' en utilisant un constructeur (probablement défini ailleurs dans l'application).
    // Chaque objet comprend un titre, une description, une URL d'image, une date (la date de création) et un compteur de "snaps" (le nombre de likes ou d'interactions).
    new FaceSnap(
      "Face Snap", // Titre du snap
      "A simple face snap app", // Description du snap
      "https://picsum.photos/300/300", // URL de l'image associée
      new Date(), // Date de création
      0 // Compteur initial de snaps (likes)
    ).withLocation("Paris"), // Utilisation de la méthode 'withLocation' pour définir la propriété 'location' du FaceSnap.
    new FaceSnap(
      "Another Snap",
      "Another simple face snap app",
      "https://picsum.photos/300/300",
      new Date(),
      120
    ),
    new FaceSnap(
      "Yet Another Snap",
      "Yet another simple face snap app",
      "https://picsum.photos/300/300",
      new Date(),
      1
    ),
  ];

  // La méthode 'getFaceSnaps' renvoie une copie du tableau 'faceSnaps'.
  // L'utilisation de l'opérateur 'spread' ([...this.faceSnaps]) permet de renvoyer une nouvelle instance du tableau,
  // empêchant les modifications directes du tableau original à partir d'autres composants.
  // Cela garantit que la source de données reste inchangée en dehors du service et maintient la cohérence des données.
  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  // La méthode snapFaceSnapById prend un identifiant en paramètre et incrémente le compteur de "snaps" (likes) pour le FaceSnap correspondant.
  // Elle recherche le FaceSnap dans le tableau 'faceSnaps' en fonction de son identifiant, puis appelle la méthode 'addSnap' sur l'instance de FaceSnap.
  // Cela permet de gérer les interactions (snaps) sur les "snaps" (photos) à partir du service, centralisant la logique de gestion des "snaps".

  // La méthode sera exportée et utilisée dans les composants pour gérer les interactions utilisateur.

  // Méthode pour incrémenter le nombre de snaps (likes) d'un FaceSnap via son ID
  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    // Recherche dans le tableau faceSnaps l'instance dont l'id correspond à l'id passé en paramètre
    // La méthode find() parcourt le tableau et renvoie le premier élément qui correspond à la condition
    const foundFaceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId // Vérifie si l'id de chaque FaceSnap correspond à l'id fourni
    );

    // Si aucun FaceSnap n'est trouvé (foundFaceSnap est undefined), on lance une erreur
    // Cela permet de gérer les cas où l'ID n'existe pas dans le tableau
    if (!foundFaceSnap) {
      throw new Error("FaceSnap not found!"); // Renvoie une erreur si l'ID est introuvable
    }

    // Si un FaceSnap a été trouvé, on appelle la méthode snap() de l'instance pour incrémenter ou décrémenter le nombre de snaps
    // en fonction du type de snap (snap ou unsnap)
    foundFaceSnap.snap(snapType);
  }
}
