import { Injectable, numberAttribute } from '@angular/core';
// import { ALBUMS, ALBUM_LISTS, CoverAlbumList } from './mock-albumss';
import { Album, Img, List, SortAlbumCallback } from "./album";
import { map, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  subjectAlbum = new Subject<Album>();
  private _albumsUrl: string = environment.albumUrl;
  private _albumListUrl: string = environment.albumListUrl;
  // private _albumImage: Img[] = CoverAlbumList;

  // Observable qui notifie aux abonnés la page actuelle
  sendCurrentNumberPage = new Subject<number>();



  constructor(
    private http: HttpClient
  ) { }


  /**
   * Fonction de recherche de tous les albums
   * @returns Retourne la liste de tous les albums
   */
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      //ordonner les albums par ordre de durée décroissante
      map((albums: Album[]) => {
        return albums.sort(
          (a: Album, b: Album) => b.duration - a.duration)
      })
    )
  }

  /**
   * Fonction de recherche d'un album particulier
   * @param id identifiant de l'album à rechercher
   * @returns Retourne l'album correspondant; undefined si aucun identifiant ne correspondant
   */
  getAlbum(id: string): Observable<Album> | undefined {
    return this.http.get<Album>(this._albumsUrl + '/' + id)
      .pipe(
        map((album: Album) => album)
      );
  }
  /**
   * 
   * @param id indentifiant à rechercher
   * @returns la référence sera retournée
   */
  getAlbumList(id: string): Observable<List> {
    return this.http.get<List>(this._albumListUrl + '/' + id)
  }

  // getRandomList(id: string) {
  //   let randomNumber: number | null = null;
  //   let listId: number[] = [];
  //   let newList: string[] = [];
  //   let list = this.getAlbumList(id)?.list
  //   if (list) {
  //     while (listId.length !== list.length) {
  //       randomNumber = Math.floor(Math.random() * list.length)
  //       if (listId.includes(randomNumber) === false) {
  //         listId.push(randomNumber);
  //       }
  //     }
  //     listId.forEach((idList) => {
  //       if (list) {
  //         newList.push(list[idList])
  //       }
  //     })
  //   }
  //   return newList;
  // }


  count(): Observable<number> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map(
        (albums: Album[]) => albums.length
      )
    );
  }

  // order(callback: SortAlbumCallback): AlbumService {
  //   this._albums.sort(callback);
  //   return this;
  // }

  // limit(start: number, end: number): AlbumService {
  //   this._albums = this._albums.slice(start, end)
  //   return this;
  // }

  search(word: string): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        //parcourir le tableau d'albums
        return albums.filter(album => {
          //retourner ceux contenant le string de la variable "word"

          return album.title
            .toLocaleLowerCase()
            .includes(word.trim().toLocaleLowerCase())
        })
      })
    )
  }

  hideAlbum() {
    // this._albumList = []

  }

  paginate(start: number, end: number): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map(
        (albums) => albums.sort(
          (a: Album, b: Album) => b.duration - a.duration
        ).slice(start, end)
      )
    )
  }

  /**
   * Méthode qui renvoie le nombre d'albums qu'on aura par page.
   */

  paginateNumberPage(): number {
    return environment.numberPage;
  }
  /**
   * Méthode signalant à tous les composants la page actuelle
   * @param numberPage 
   * @returns 
   */
  currentPage(numberPage: number) {
    return this.sendCurrentNumberPage.next(numberPage);
  }

  /**
   * Méthode qui permet de changer le statut d'un album à "on"
   * @param album : l'album dont le statut doit passer à "on"
   */
  switchOn(album: Album): void {
    //Si l'actuel est celui qu'on joue,
    album.status = 'on';
    // le code ci-dessous s'exécute car on y souscrit.
    this.http.put<void>(this._albumsUrl + '/' + album.id, album)
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.warn(err),
        complete: () => this.subjectAlbum.next(album)
      })
  }

  /**
   * Méthode qui permet de changer le statut d'un album à "off"
   * @param album : l'album dont le statut doit passer à "off"
   */

  /**
   * Renvoie un observable, et ne s'exécute donc qu'à la souscription. Du coup, il faut souscrire, pour l'exécuter
   */
  switchOff(album: Album) {
    album.status = "off";
    this.http.put<void>(`${this._albumsUrl} / ${album.id}`, album)
      .subscribe(() => { })


  }
}
