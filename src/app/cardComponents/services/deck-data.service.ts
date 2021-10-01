import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/views/login/login.component';
import { Card } from '../card-component';

@Injectable({
  providedIn: 'root'
})
export class DeckDataService {

  constructor() { }

  getDeckData(){
    return [
      new Card (LoginComponent, {
        name: 'Bombasto',
        bio: 'Brave as they come',
      }),
      new Card (LoginComponent, {
        name: 'Bombasto',
        bio: 'Brave as they come',
      })
    ];
  }
}
