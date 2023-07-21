import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumsDetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
