import { Component, OnInit } from '@angular/core';

import { Image } from './image.class';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImagesService]
})


export class AppComponent implements OnInit {
  // Initialize variables
  base = 0;
  images: Image[];

  mainImage: Image;
  nextImage: Image;
  prevImage: Image;

  // Adding imgService
  constructor(private imgService: ImagesService) { }

  // Function that download allImages from the service
  getImages(): void {
    this.imgService.getAllImages().then( images => {

      this.images = images;

      this.showImages(this.base);
    } );
  }

  // Function that is invoked at the init of the application
  ngOnInit(): void {
    this.getImages();
  }

  // Function that change the images to display
  showImages(id: number): void {
    this.mainImage = this.images[id];
    this.nextImage = (id + 1 < this.images.length) ? this.images[id + 1] : null;
    this.prevImage = (id - 1 >= 0) ? this.images[id - 1] : null;

  }

  // Function to go to the next image
  next(): void {
    this.base += 1;
    this.showImages(this.base);
  }

  // Function to go to the previous image
  prev(): void {
    this.base -= 1;
    this.showImages(this.base);
  }

}
