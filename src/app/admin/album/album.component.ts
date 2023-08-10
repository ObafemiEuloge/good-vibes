import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/album';
import { AlbumService } from '../../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums !: Album[]
  constructor(
    private albumService : AlbumService
  ){}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (albums : Album[]) => {
        this.albums = albums
      }
    })
  }

  
}
