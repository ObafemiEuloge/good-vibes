import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  word: string = "";
  @Output() searchAlbums: EventEmitter<Album[]> = new EventEmitter(); // un émetteur d'albums

  albums: Album[] = ALBUMS;
  constructor(
    private albumService: AlbumService
  ){}

  onSubmit(form: NgForm) {
    // this.albumService.search(form.value.word).subscribe({
    //   next: (alb : Album[]) => {
    //     if (alb.length > 0) {
    //       this.searchAlbums.emit(alb)
    //     }
    //   }
    // })
  }

  onChangeEmit($emit: string){
    this.albumService.search($emit).subscribe({
      next: (alb : Album[]) => {
          this.searchAlbums.emit(alb)
      }
    });
    // this.word = '';
    
  }

 

}
