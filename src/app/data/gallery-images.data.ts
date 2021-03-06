import { InMemoryDbService } from 'angular-in-memory-web-api';

import { GalleryImage } from '../components/box-image-gallery/box-image-gallery.component';

export class GalleryImageData implements InMemoryDbService {
  createDb() {
    let images: GalleryImage[] = [
        {
          thumb: 'https://www.e-ink-info.com/files/e-ink/Visionect-joan-meeting-room-e-ink-manager-img_assist-400x262.jpg',
          caption: 'Visionect launches an E Ink meeting room digital sign'
        },
        {
          thumb: 'http://payload132.cargocollective.com/1/6/220493/4942816/tilensepic_photography_visionect03.jpg',
          caption: 'Tilen Sepič Product Photography'
        }
      ];
    return {images};
  }
}
