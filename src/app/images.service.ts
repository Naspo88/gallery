/**
 * Created by robertominghi on 10/07/17.
 */

import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Image } from './image.class';

@Injectable()
export class ImagesService {
  private imageUrl = 'https://jsonplaceholder.typicode.com/photos';  // URL to web api

  constructor ( private http: Http ) { }

  getAllImages(): Promise<Image[]> {
    return this.http.get(this.imageUrl)
      .toPromise()
      .then(response => response.json() as Image)
      .catch(this.handleError);
  }

  private handleError (error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
