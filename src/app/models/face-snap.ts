export class FaceSnap {
  location?: string; // Le point d'interrogation indique que cette propriété est facultative

  // Le constructeur de la classe FaceSnap permet d'initialiser une instance avec les propriétés suivantes :
  constructor(
    public title: string, // Le titre du "snap", par exemple le nom ou le sujet du FaceSnap
    public description: string, // Une description du FaceSnap, qui explique de quoi il s'agit
    public imageUrl: string, // L'URL de l'image associée au FaceSnap, qui sera affichée dans l'interface
    public createdDate: Date, // La date de création du FaceSnap (date à laquelle il a été généré ou posté)
    public snaps: number // Le nombre initial de "snaps" ou interactions sur ce FaceSnap
  ) {}

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

  setLocation(location: string): void {
    this.location = location; // Définit la propriété location du FaceSnap
  }
  // On cherche à centraliser la logique de gestion des "snaps" dans la classe FaceSnap, pour éviter de la répéter dans d'autres composants.
}
