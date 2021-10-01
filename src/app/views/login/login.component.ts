import { Component, OnInit } from '@angular/core';
import { CardComponentInterface } from 'src/app/interfaces/card-component-interface';
import { DeckControllerService } from 'src/app/services/deck-controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, CardComponentInterface {

  constructor(private deckController: DeckControllerService) { }

  ngOnInit(): void {
  }

  goToNextCard(){
    this.deckController.moveToNextCard();
  }

  goToPreviousCard(){
    this.deckController.moveToPreviousCard();
  }

}
