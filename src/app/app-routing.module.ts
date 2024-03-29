import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { AlbumsDescriptionComponent } from './albums-description/albums-description.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlbumComponent } from './admin/album/album.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactifComponent } from './form-reactif/form-reactif.component';


let albumsRoutes: Routes = [
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
    path: 'album',
    component: AlbumComponent
  },
  {
    path: 'oc',
    component: OpenCloseComponent
  },
  {
    path: 'template',
    component: FormTemplateComponent
  },
  {
    path: 'reactif',
    component: FormReactifComponent
  },
  {
    path: 'admin',
    component: AlbumComponent
  },

  
  /**=================ATTENTION DANGER======================= */
  //La page NotFound reste toujours à la fin du tableau.
  {
    path: "**",
    component: PageNotFoundComponent
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(albumsRoutes),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
