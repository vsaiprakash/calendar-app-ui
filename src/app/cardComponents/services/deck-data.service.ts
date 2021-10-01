import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/views/login/login.component';
import { Card } from '../card-component';

@Injectable({
  providedIn: 'root'
})
export class DeckDataService {

  data: any = [
    new Card (LoginComponent, { }),
    new Card (LoginComponent, { })
  ];

  constructor() { }

  getDeckData(){
    return this.data;
  }

  getDeckDataAt(index: number){
    return this.data[index];
  }
}
