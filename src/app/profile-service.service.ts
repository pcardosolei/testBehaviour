import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  userBehaviour$ = new BehaviorSubject(0);
  constructor() { console.log('created');}

  random(){
    setInterval( () => {
      let value = this.userBehaviour$.getValue();
      this.userBehaviour$.next(++value);
    },1000);
  }

}
