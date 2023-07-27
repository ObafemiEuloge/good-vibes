import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations : [fadeInAnimation],
})
// transition('open => close', animate('2000ms')), // on peut mettre un Number en paramètre à animate mais obligatoirement en Millisecondes
// transition('close => open', animate('2000ms')), // on peut mettre un Number en paramètre à animate mais obligatoirement en Millisecondes
export class OpenCloseComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen; 
  } 
}
