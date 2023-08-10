import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from "@angular/router";
import { AlbumsDescriptionComponent } from './albums-description/albums-description.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { firstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { PaginateComponent } from './paginate/paginate.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { HttpClientModule } from '@angular/common/http';


const albumsRoutes: Routes = [
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },

  {
    path: 'albums',
    component: AlbumsComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'album/:id',
    component: AlbumsDescriptionComponent
  },
  {
    path: 'oc',
    component: OpenCloseComponent
  },
  //La page NotFound reste toujours à la fin du tableau.
  {
    path: "**",
    component: PageNotFoundComponent
  },
]


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumsDetailsComponent,
    SearchComponent,
    AlbumsDescriptionComponent,
    PageNotFoundComponent,
    OpenCloseComponent,
    firstCompComponent,
    SecondCompComponent,
    PaginateComponent,
    AudioPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(albumsRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





