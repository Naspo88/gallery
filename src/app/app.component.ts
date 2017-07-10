import { Component, OnInit } from '@angular/core';

import { Images } from './images';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImagesService]
})


export class AppComponent implements OnInit {

  title = 'Gallery';
  base = 0;
  images: Images[];

  mainImage: Images;
  nextImage: Images;
  prevImage: Images;

  constructor(private imgService: ImagesService) { }

  getImages(): void {
    this.imgService.getAllImages().then( images => {

      this.images = images;

      this.showImages(this.base);
    } );
  }

  ngOnInit(): void {
    this.getImages();
  }

  showImages(id: number): void {
    this.mainImage = this.images[id];
    this.nextImage = (id + 1 < this.images.length) ? this.images[id + 1] : null;
    this.prevImage = (id - 1 >= 0) ? this.images[id - 1] : null;

  }

  next(): void {
    this.base += 1;
    console.log(this.base);
    this.showImages(this.base);
  }

  prev(): void {
    this.base -= 1;
    this.showImages(this.base);
  }

}
