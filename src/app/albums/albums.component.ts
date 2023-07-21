import { Component, OnInit } from '@angular/core';

import { Album, List } from "../album";
import { ALBUMS } from "../mock-albums";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  title : string = "app-music"
  albums: Album[] = ALBUMS;
  selectedAlbum !: Album;
  constructor() {}
  ngOnInit() {
      
  }

  onSelect(generateAlbum: Album){
    this.selectedAlbum = generateAlbum;
  }

}


