import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { GalleryImage } from '../components/box-image-gallery/box-image-gallery.component';

@Injectable()
export class DataService {

  public images: GalleryImage[];

  private urlGalleryImages = 'api/images';

  constructor(private http: HttpClient) {
    this.getGalleryImages();
  }

  private getGalleryImages() {
    const subscription: Subscription = this.http.get(this.urlGalleryImages)
    .subscribe(result => {
      this.images = result as GalleryImage[];

      subscription.unsubscribe();
    });
  }

}
