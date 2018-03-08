import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activeCounter: number = 0;
  inactiveCounter: number = 0;

  constructor() { }

  countActive(item: string) {
    if (item === "active"){
      this.activeCounter++;
      console.log("Counter service Active counter: " + this.activeCounter);
    } else {
      this.inactiveCounter++;
      console.log("Counter service Inactive counter: " + this.inactiveCounter);
    }
  }

}
