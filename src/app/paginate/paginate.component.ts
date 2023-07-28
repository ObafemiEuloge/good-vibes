import { Component, OnInit } from '@angular/core';
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

}
