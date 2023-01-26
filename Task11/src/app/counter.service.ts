import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CounterService {
  constructor() {}

  counterArray: number[] = [];


  setCounter() {
    return new Observable((observer) => {
      setInterval(() => {
        this.counterArray.push(this.counterArray.length + 1);
        observer.next(this.counterArray);
      }, 3000);
    });
  }
}