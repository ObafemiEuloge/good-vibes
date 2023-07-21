import { Component, OnInit, Input} from '@angular/core';
import { Album } from "../album";
import { ALBUM_LISTS } from '../mock-albums';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.css']
})
export class AlbumsDetailsComponent implements OnInit{
  @Input() album !: Album;
  albumList !: string[] | undefined ;
  
  constructor() {}
  ngOnInit(): void {
      console.log(this.album);
  }

  ngOnChanges(){
    if (this.album !== undefined) {
      ALBUM_LISTS.forEach((songList)=>{
          if (this.album.id === songList.id) {
            this.albumList = songList.list ;
          }
      })
    }
    console.log(this.albumList);
    
  }

}
