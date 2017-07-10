/**
 * Created by robertominghi on 10/07/17.
 */

import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Images } from './images';

@Injectable()
export class ImagesService {
  private imageUrl = 'https://jsonplaceholder.typicode.com/photos';  // URL to web api

  constructor ( private http: Http ) { }

  getAllImages(): Promise<Images[]> {
    return this.http.get(this.imageUrl)
      .toPromise()
      .then(response => response.json() as Images)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
