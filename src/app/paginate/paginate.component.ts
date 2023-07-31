import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit{
  /**
   * Le nombre total d'albums
   */
  total: number = 0;
  /**nombre d'album(s) par page (stocké dans les variables d'environnements) */
  perPage : number ;
  /**nombre de boutons à générer */
  numberPages : number = 0;
  /**tableau réunissant le label de chaque page */
  pages : number[] = [];
  /**Un émetteur d'événements */
  @Output() setPaginate: EventEmitter<{start: number, end: number}> = new EventEmitter()
  /**Variable stockant la page actuelle */
  currentPage: number = 1; //par défaut est égal à 1.


  constructor(
    private albumsService: AlbumService
  ) {
    this.perPage = albumsService.paginateNumberPage();
  }
  ngOnInit(): void {
    this.total = this.albumsService.count();
    this.numberPages = Math.ceil(this.total / this.perPage);

    for (let i = 1; i <= this.numberPages; i++) {
      this.pages.push(i)
    }
  }

  next(){
    if (this.currentPage >= this.numberPages) {
      // this.currentPage = this.numberPages ;
      return;
    } else {
      this.currentPage++ ;
    }

    //Demander au parent d'afficher les albums suivants dans la liste
    this.setPaginate.emit(this.setAlbums(this.currentPage));
  }

  previous(){
    if (this.currentPage <= 1) {
      return      
    }else {
      this.currentPage--;
    }

    this.setPaginate.emit(this.setAlbums(this.currentPage));
  }

  setAlbums(page : number) : {start: number, end: number}{
    let start = (page - 1) * this.perPage;
    let end = start + this.perPage;
    // return {start: start, end: end}    
    return {start, end}    
  }

  changePage(page: number){
    this.currentPage = page;
    this.setPaginate.emit(this.setAlbums(this.currentPage))
  }

}
