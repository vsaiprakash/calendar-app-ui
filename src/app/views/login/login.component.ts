import { Component, OnInit } from '@angular/core';
import { CardComponentInterface } from 'src/app/cardComponents/card-interfaces/card-component-interface';
import { DeckControllerService } from 'src/app/cardComponents/card-services/deck-controller.service';

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
    console.log("Next clicked !");
    this.deckController.moveToNextCard();
  }

  goToPreviousCard(){
    this.deckController.moveToPreviousCard();
  }

}
