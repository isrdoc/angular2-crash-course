import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxImageGalleryComponent } from './box-image-gallery.component';

describe('BoxImageGalleryComponent', () => {
  let component: BoxImageGalleryComponent;
  let fixture: ComponentFixture<BoxImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxImageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
