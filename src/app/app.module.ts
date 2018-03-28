import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageMainComponent } from './components/page-main/page-main.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { BoxImageGalleryComponent } from './components/box-image-gallery/box-image-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageMainComponent,
    PageFooterComponent,
    BoxImageGalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
