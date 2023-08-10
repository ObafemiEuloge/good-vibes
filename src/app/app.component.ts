import { Component, OnInit } from '@angular/core';
import { backGround } from './animation.module';
import { Observable, interval, map, take } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [backGround]
})
export class AppComponent implements OnInit{
  newWord: string = "";
  title = 'Good Vibes';
  click: boolean = true;
  timerObservable!: Observable<string>;
  count !: string;

  ngOnInit(): void {
    this.timerObservable = interval(1000).pipe(
      take(3600 * 12),
      map(num => {
        const hours = Math.floor(num / 3600);
        const minutes = Math.floor(num / 60)
        return `${this.format(hours)}h ${this.format(minutes - hours * 60)}min ${this.format(num - minutes * 60)}s`
      })
    )
    this.timerObservable.subscribe(num => {
      this.count = num ;
    });
  }

  format (num : number) : string{
    return (num < 10 ? "0" : "") + num
  }
  
  ground() {
    this.click != this.click
  }

  parentReceive($event: string) {
    this.newWord = $event;
  }
}




