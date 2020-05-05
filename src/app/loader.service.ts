import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public loader$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  counter: number = 0;
  constructor() { }

  show() {
    this.counter++;
    this.loader$.next(true);
  }
  hide() {
    this.counter--;
    if (this.counter <= 0) {
      this.forceHide();
    }

  }
  forceHide() {
    this.counter = 0;
    this.loader$.next(false);
  }
}
