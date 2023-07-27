import { Injectable, numberAttribute } from '@angular/core';
import { ALBUMS, ALBUM_LISTS, CoverAlbumList } from './mock-albums';
import { Album, Img, List, SortAlbumCallback } from "./album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private _albums: Album[] = ALBUMS;
  private _albumList: List[] = ALBUM_LISTS;
  private _albumImage: Img[] = CoverAlbumList;


  constructor() { }

  /**
   * Fonction de recherche de tous les albums
   * @returns Retourne la liste de tous les albums
   */
  getAlbums(): Array<Album> {
    return this._albums.sort((a: Album, b: Album) => { return b.duration - a.duration });
  }

  /**
   * Fonction de recherche d'un album particulier
   * @param id identifiant de l'album à rechercher
   * @returns Retourne l'album correspondant; undefined si aucun identifiant ne correspondant
   */
  getAlbum(id: string): Album | undefined {
    return this._albums.find(album => album.id === id);
  }
  /**
   * 
   * @param id indentifiant à rechercher
   * @returns la référence sera retournée
   */
  getAlbumList(id: string): List | undefined {
    return this._albumList.find(list => list.id === id);
  }

  getRandomList(id: string) {
    let randomNumber: number | null = null;
    let nextRandomNumber: number | null = null;
    let randomNumberArray: number[] | undefined;
    let listId: number[] = [];
    let newList: string[] = [];
    let list = this.getAlbumList(id)?.list

    if (list) {
      for (let j = 0; j < list.length; j++) {
        randomNumber = Math.floor(Math.random() * list.length)
        if (randomNumber === randomNumber) {
          randomNumber = Math.floor(Math.random() * list.length)
        } else {
          newList.push(list[randomNumber])
        }
        
        newList.push(list[randomNumber])

      }

      console.log(listId)
      console.log(randomNumber);


    }



    return newList;
  }

  getAlbumImage(id: string): Img | undefined {
    return this._albumImage.find(img => img.id === id);
  }

  count() {
    return this._albums.length;
  }

  order(callback: SortAlbumCallback): AlbumService {
    this._albums.sort(callback);
    return this;
  }

  limit(start: number, end: number): AlbumService {
    this._albums = this._albums.slice(start, end)
    return this;
  }

  search(word: string): Album[] {
    return this._albums.filter((album) => {
      return album.title
        .toLowerCase()
        .includes(word.trim().toLowerCase())
    });
  }

}
