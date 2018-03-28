import { Pipe, PipeTransform } from '@angular/core';
import { GalleryImage } from '../components/box-image-gallery/box-image-gallery.component';

@Pipe({
  name: 'sortGalleryImages'
})
export class SortGalleryImagesPipe implements PipeTransform {

  transform(array: Array<GalleryImage>, args: string): Array<GalleryImage> {
    array && array.sort((a: any, b: any) => {
      if (a.caption < b.caption) {
        return -1;
      } else if (a.caption > b.caption) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
