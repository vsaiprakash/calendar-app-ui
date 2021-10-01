import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/views/login/login.component';
import { Card } from '../card-component';

@Injectable({
  providedIn: 'root'
})
export class DeckDataService {

  data: any;

  constructor() {
    this.data = [
      new Card ("login-state", LoginComponent),
      new Card ("second-state", LoginComponent),
      new Card ("third-state", LoginComponent),
      new Card ("forth-state", LoginComponent)
    ]
  }

  getDeckData(){
    return this.data;
  }

  getDeckDataAt(index: number){
    return this.data[index];
  }
}
