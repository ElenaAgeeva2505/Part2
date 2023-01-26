import { Component} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CounterService } from './counter.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public counterService: CounterService) {}

  counterSubs$!: Subscription;
  enableStopButton = false;

  getCounter() {
    this.counterSubs$ = this.counterService.setCounter().subscribe((next) => {
      console.log(next);
    });
    this.enableStopButton = true;
  }

  stopSubs() {
    this.counterSubs$.unsubscribe();
    this.enableStopButton = false
  }
}
