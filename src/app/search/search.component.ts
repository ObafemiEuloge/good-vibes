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
    let results = this.albumService.search(form.value.word);
    this.searchAlbums.emit(results)
  }

  onChangeEmit($emit: string){
    let results = this.albumService.search($emit);
    this.searchAlbums.emit(results)
    
  }

 

}
