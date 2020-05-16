import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HeaderComponent } from './header/header.component';
import { TimelineComponent } from './timeline/timeline.component';
import { WishVideoComponent } from './wish-video/wish-video.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    TimelineComponent,
    WishVideoComponent
    
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    WishVideoComponent
  ],
  providers: [
     {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
