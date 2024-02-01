import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { ShareModule } from "../share/share.module";
import { AddAlbumComponent } from './add-album/add-album.component';
import { RouterModule, Routes } from '@angular/router';
import { AddAlbum2Component } from './add-album2/add-album2.component';


const routes : Routes = [
  {
    path: 'admin/add2',
    component: AddAlbum2Component
  },
]

@NgModule({
  declarations: [
    AlbumComponent,
    AddAlbum2Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
    // ReactiveFormsModule
  ],
  exports : [AlbumComponent, RouterModule, ShareModule]
})
export class AdminModule { }
