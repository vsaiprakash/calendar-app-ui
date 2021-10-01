import { Injectable } from '@angular/core';
import { CalendarComponent } from 'src/app/views/calendar/calendar.component';
import { LoginComponent } from 'src/app/views/login/login.component';
import { Card } from '../card-component';

@Injectable({
  providedIn: 'root'
})
export class DeckDataService {

  data: any;

  constructor() {
    this.data = [
      new Card ("login", LoginComponent),
      new Card ("calendar", CalendarComponent),
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
