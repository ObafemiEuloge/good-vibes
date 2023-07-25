import { Injectable, numberAttribute } from '@angular/core';
import { ALBUMS, ALBUM_LISTS, CoverAlbumList } from './mock-albums';
import { Album, Img, List } from "./album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private _albums: Album[] = ALBUMS;
  private _albumList: List[] = ALBUM_LISTS;
  private _albumImage : Img[] = CoverAlbumList;
  

  constructor() { }

  /**
   * Fonction de recherche de tous les albums
   * @returns Retourne la liste de tous les albums
   */
  getAlbums() : Array<Album>{ 
   
    return this._albums.sort((a: Album, b: Album)=>{return b.duration - a.duration});
  }

  /**
   * Fonction de recherche d'un album particulier
   * @param id identifiant de l'album à rechercher
   * @returns Retourne l'album correspondant; undefinend si aucun identifiant ne correspondant
   */
  getAlbum(id: string) : Album | undefined { 
    return this._albums.find(album => album.id === id);
  }
  /**
   * 
   * @param id indentifiant à rechercher
   * @returns la référence sera retournée
   */
  getAlbumList(id: string) : List | undefined{ 
    return this._albumList.find(list => list.id === id);
  }

  getAlbumImage(id: string) : Img | undefined{ 
    return this._albumImage.find(img => img.id === id);
  }

  count(){
    return this._albums.length;
  }

  paginate(start: number, end: number): Album[] {
    
  }

}
