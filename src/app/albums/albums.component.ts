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
    console.log(`Le nombre d'albums disponible est ${this.albumService.count()}`)
  }

  ngOnInit() : void {
      this.albums = this.albumService
                        .order((a: Album, b: Album)=>{return a.duration - b.duration})
                        .limit(0, 2)
                        .getAlbums();
  }

  onSelect(generateAlbum: Album){
    this.selectedAlbum = generateAlbum;
  }

  playParent(album : Album){
    this.status = album.id
  }




}


