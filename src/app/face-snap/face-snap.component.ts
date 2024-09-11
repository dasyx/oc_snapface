import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-face-snap",
  standalone: true,
  imports: [],
  templateUrl: "./face-snap.component.html",
  styleUrl: "./face-snap.component.scss",
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapText!: string;
  isSnapped!: boolean;

  ngOnInit(): void {
    this.title = "Face Snap";
    this.description = "A simple face snap app";
    this.createdAt = new Date();
    this.imageUrl = "https://picsum.photos/200/300";
    this.snaps = 0;
    this.snapText = "Snap Me";
    this.isSnapped = false;
  }

  onSnap(): void {
    if (this.snaps === 0) {
      this.snaps++;
      this.snapText = "Unsnap Me";
      this.isSnapped = true;
    } else {
      this.snaps--;
      this.snapText = "Snap Me";
      this.isSnapped = false;
    }
  }
  /* onSnapMinus(): number {
    if (this.snaps > 0) {
      return this.snaps--;
    } else {
      return this.snaps;
    }
  } */
}
