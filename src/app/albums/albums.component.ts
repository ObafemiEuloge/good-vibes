import { Component, OnInit } from '@angular/core';
import { Album, List } from "../album";
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumsComponent implements OnInit {
  title: string = "app-music"
  albums: Album[] | undefined = undefined;
  selectedAlbum !: Album;
  status: string | null = null;
  constructor(
    private albumService: AlbumService
  ) {
    console.log(`Le nombre d'albums disponible est ${this.albumService.count()}`)
  }

  ngOnInit(): void {
    this.albumService
      .paginate(0, this.albumService.paginateNumberPage())
      .subscribe({
        next: (alb: Album[]) => {
          this.albums = alb
        }
      })
    // .order((a: Album, b: Album)=>{return a.duration - b.duration})
    // .getAlbums();

      // this.albumService.albumFetch();
  }

  onSelect(generateAlbum: Album) {
    this.selectedAlbum = generateAlbum;
  }

  playParent(album: Album) {
    this.status = album.id
  }

  search($event: Album[]) {
    if ($event) {
      this.albums = $event;
    }

  }


  onSetPaginate($event: { start: number, end: number }) {
    this.albumService
      .paginate($event.start, $event.end + 1)
      .subscribe({
        next : (alb : Album[])=> this.albums = alb
      })
  }



}


