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
    this.albumService
      .paginate(0, this.albumService.paginateNumberPage())
      .subscribe({
        next: (alb: Album[]) => {
          this.albums = alb
        }
      })
  }

  onSetPaginate ($event: {start: number, end: number}) {
    this.albumService
    .paginate($event.start, $event.end + 1)
    .subscribe({
      next : (alb : Album[])=> this.albums = alb
    })
  }

  
}
