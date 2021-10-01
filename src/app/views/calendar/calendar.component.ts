import { Component, OnInit } from '@angular/core';
import { CardComponentInterface } from 'src/app/cardComponents/card-interfaces/card-component-interface';
import { DeckControllerService } from 'src/app/cardComponents/card-services/deck-controller.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, CardComponentInterface {

  constructor(private deckController: DeckControllerService) { }

  ngOnInit(): void {
  }

  goToNextCard(){
    console.log("Next clicked !");
    this.deckController.moveToNextCard();
  }

  goToPreviousCard(){
    console.log("Back clicked !");
    this.deckController.moveToPreviousCard();
  }

}
