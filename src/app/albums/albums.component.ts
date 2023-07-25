import { Component, OnInit } from '@angular/core';

import { Album, List } from "../album";
import { AlbumService } from '../album.service';
import { ALBUMS } from "../mock-albums";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  title : string = "app-music"
  albums: Album[] | undefined = undefined;
  selectedAlbum !: Album ;
  status: string | null = null;
  // tag: string = "Play"
  constructor(
    private albumService : AlbumService
  ) {

  }

  ngOnInit() : void {
      this.albums = this.albumService.getAlbums();
      console.log(`Le nombre d'albums disponible est ${this.albumService.count()}`)
  }

  onSelect(generateAlbum: Album){
    this.selectedAlbum = generateAlbum;
  }

  playParent(album : Album){
    this.status = album.id
  }




}


