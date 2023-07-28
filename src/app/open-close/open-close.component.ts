import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animation.module';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations : [fadeInAnimation],
})
// transition('open => close', animate('2000ms')), // on peut mettre un Number en paramètre à animate mais obligatoirement en Millisecondes
// transition('close => open', animate('2000ms')), // on peut mettre un Number en paramètre à animate mais obligatoirement en Millisecondes
export class OpenCloseComponent implements OnInit {
  ngOnInit(): void {
    // on s'abonne à l'observable
    this.myObservable.subscribe((album)=>{
      console.log(album);
    });
  }
  myObservable = new Observable((observer: Observer<string>)=>{
    //le code à exécuter quand on récupère la donnée
    setTimeout(()=>{observer.next("album 1")},1000)
    setTimeout(()=>{observer.next("album 2")},2000)
    setTimeout(()=>{observer.next("album 3")},3000)
    setTimeout(()=>{observer.next("album 4")},4000)
        
  })
  isOpen = true;

  

  toggle() {
    this.isOpen = !this.isOpen; 
  } 



}
