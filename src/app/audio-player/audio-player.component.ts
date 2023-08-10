import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit{
  /**Variable permettant d'afficher ou non, le composant audio-player */
  showplayer : boolean = false;
  /**Variable représentant l'album joué */
  playedAlbum !: Album;
  /**Variable représentant le nombre total de sons dans l'album */
  total : number = 1;
  /** Variable représentant le numéro du son joué actuellement (1/4) */
  currentSongNumber : number = 1;
  /**Variable représentant le pourcentage de sons joués (25% pour 1/4, ....) */
  ratio : number = 0;


  constructor(
    private albumService : AlbumService
  ){}
  ngOnInit(): void {
    // souscrire au sujet "subjectAlbum pour recevoir les notifications"
    this.albumService.subjectAlbum.subscribe( {
      next : (a: Album) => {
        this.playedAlbum = a;
        // afficher le composant
        this.showplayer = true;
        // le son joué ici en premier est le n°1
        this.currentSongNumber = 1;
        let duration = this.playedAlbum.duration; // durée totale de l'album;
        this.total = Math.floor(duration / 120);

        this.ratio = (100 / this.total)
        /** C'est une variable représentant le pourcentage à ajouter après chaque son dans la barre de progression */
        let step = this.ratio; // il faut à chaque fois augmenter le ratio%

        // augmenter le niveau de la barre de progression chaque deux minutes (1000 * 120 millisecondes)
        const intervalId = setInterval(()=>{
          this.ratio += step;
          this.currentSongNumber++
          if (this.ratio > 100) {
            clearInterval(intervalId)
            this.showplayer = false;
            this.albumService.switchOff(this.playedAlbum)
          }
        }, 1000)

      }
    });
  }
}
