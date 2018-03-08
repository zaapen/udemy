import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  activeCounter: number = 0;
  inactiveCounter: number = 0;

  // userSetToActive = new EventEmitter<number>();

  // userSetToInactive = new EventEmitter<number>();

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    // this.activeCounter = this.counterService.activeCounter;
    // this.inactiveCounter = this.counterService.inactiveCounter;
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.countActive('active');
    this.inactiveCounter = this.counterService.inactiveCounter;
    console.log('User service Inactive counter' + this.inactiveCounter);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.countActive('inactive');
    this.activeCounter = this.counterService.activeCounter;
    console.log('User service active counter' + this.activeCounter);
  }


}
