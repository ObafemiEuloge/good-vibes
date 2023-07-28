import { Component } from '@angular/core';
import { backGround } from './animation.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [backGround]
})
export class AppComponent {
  newWord : string = "";
  title = 'Good Vibes';
  click : boolean = true;
  ground() {
    this.click != this.click  
  }

  parentReceive($event : string ){
    this.newWord = $event;
  }
}




