import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from './user.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  inactiveUsers: Array<string> = [];
  activeUsers: Array<string> = [];
  activeCount: number;
  inactiveCount: number;

  constructor(private userService: UserService, private counterService: CounterService) {}

  ngOnInit() {
    this.inactiveUsers = this.userService.inactiveUsers;
    this.activeUsers = this.userService.activeUsers;
    this.activeCount = this.userService.activeCounter;
    this.inactiveCount = this.userService.inactiveCounter;
  }

  ngOnChanges() {
    this.activeCount = this.userService.activeCounter;
    this.inactiveCount = this.userService.inactiveCounter;
  }
}
