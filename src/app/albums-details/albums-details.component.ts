import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Album } from "../album";
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.css'],
})
export class AlbumsDetailsComponent implements OnInit{
  @Input() album !: Album;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();

  albumList !: string[] | undefined ;
  imgAlbum !: string | undefined;
  randomList !: string[] | undefined;

  
  constructor(
    private albumService : AlbumService
  ) {}
  ngOnInit(): void {
      console.log(this.album);
  }

  ngOnChanges() : void{
    if (this.album) {
     this.albumList = this.albumService.getAlbumList(this.album.id)?.list
    }
    this.ngChangesCover();
  }

  ngRandomList() {
    this.albumList = this.albumService.getRandomList(this.album.id)
  }

  ngChangesCover() : void {
    if (this.album) {
      this.imgAlbum =this.albumService.getAlbumImage(this.album.id)?.src
    }
  }

  play(album: Album){
    this.onPlay.emit(album);
  }

  


}

