import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageMainComponent } from './components/page-main/page-main.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageMainComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
