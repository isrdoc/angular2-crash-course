import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-image-gallery',
  templateUrl: './box-image-gallery.component.html',
  styleUrls: ['./box-image-gallery.component.scss']
})
export class BoxImageGalleryComponent implements OnInit {

  @Input() private images: GalleryImage[];

  constructor() { }

  ngOnInit() {
  }

}

export class GalleryImage {
  thumb: string;
  caption: string;
}
