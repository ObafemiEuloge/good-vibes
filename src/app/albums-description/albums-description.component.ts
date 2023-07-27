import { Component, OnInit} from '@angular/core';
import { AlbumsComponent } from '../albums/albums.component';
import { Album } from "../album";
import { ActivatedRoute } from "@angular/router";
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';


@Component({
  selector: 'app-albums-description',
  templateUrl: './albums-description.component.html',
  styleUrls: ['./albums-description.component.css'],
  animations: [fadeInAnimation]
})
export class AlbumsDescriptionComponent implements OnInit{
  album !: Album | undefined;

  constructor(
    private route : ActivatedRoute, 
    private aS: AlbumService
  ){ }
  
  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.album = this.aS.getAlbum(id);

  }

}
