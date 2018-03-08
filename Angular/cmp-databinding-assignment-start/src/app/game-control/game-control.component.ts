import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  num;
  lastNum: number = 0
  constructor() { }

  ngOnInit() {
  }

  onStart() {
     this.num = setInterval(() => {
       this.intervalFired.emit(this.lastNum + 1);
       this.lastNum++;
     }, 1000);
  }

  onStop() {
    clearInterval(this.num);
  }

}
