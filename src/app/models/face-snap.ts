import { SnapType } from "./snap-type.type";

export class FaceSnap {
  location?: string; // Le point d'interrogation indique que cette propriété est facultative
  id?: string; // L'identifiant du FaceSnap, qui peut être utilisé pour identifier de manière unique chaque instance

  // Le constructeur de la classe FaceSnap permet d'initialiser une instance avec les propriétés suivantes :
  constructor(
    public title: string, // Le titre du "snap", par exemple le nom ou le sujet du FaceSnap
    public description: string, // Une description du FaceSnap, qui explique de quoi il s'agit
    public imageUrl: string, // L'URL de l'image associée au FaceSnap, qui sera affichée dans l'interface
    public createdDate: Date, // La date de création du FaceSnap (date à laquelle il a été généré ou posté)
    public snaps: number // Le nombre initial de "snaps" ou interactions sur ce FaceSnap
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
    // Génère un identifiant unique pour chaque instance de FaceSnap
    // L'objet crypto fournit des fonctionnalités de cryptographie et de génération de nombres aléatoires
    // La méthode randomUUID() de l'objet crypto génère un identifiant unique de manière aléatoire
    // La méthode substring(0, 8) permet de limiter la longueur de l'identifiant à 8 caractères
    console.log(this.id); // Affiche l'identifiant généré dans la console
  }

  // Les propriétés ci-dessus sont définies dans le constructeur et peuvent être utilisées pour initialiser une instance de FaceSnap.
  addSnap(): void {
    this.snaps++; // Incrémente le nombre de "snaps" sur cet élément
  }
  removeSnap(): void {
    if (this.snaps > 0) {
      // Vérifie si le nombre de "snaps" est supérieur à zéro
      this.snaps--; // Décrémente le nombre de "snaps" si c'est le cas
    }
  }

  // La méthode snap() permet d'ajouter un "snap" à l'élément, tandis que la méthode unSnap() permet de le retirer.
  snap(snapType: SnapType) {
    if (snapType === "snap") {
      this.addSnap(); // Appelle la méthode addSnap() pour incrémenter le nombre de "snaps"
    } else if (snapType === "unsnap") {
      this.removeSnap(); // Appelle la méthode removeSnap() pour décrémenter le nombre de "snaps"
    }
  }

  setLocation(location: string): void {
    this.location = location; // Définit la propriété location du FaceSnap
  }
  // On cherche à centraliser la logique de gestion des "snaps" dans la classe FaceSnap, pour éviter de la répéter dans d'autres composants.

  withLocation(location: string): FaceSnap {
    this.setLocation(location); // Définit la propriété location du FaceSnap
    return this; // Renvoie l'instance actuelle du FaceSnap
  }
}
