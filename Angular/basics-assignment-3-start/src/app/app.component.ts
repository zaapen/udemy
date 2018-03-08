import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle = false;
  // timeLog: Array<number> = [];
  timeLog = [];
  timestamp: number = 0;

  onToggle() {
    // this.timestamp ++;
    // this.timeLog.push(this.timestamp);
    this.timeLog.push(new Date());
    console.log(this.timeLog);
    if (this.toggle === false) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }
}
