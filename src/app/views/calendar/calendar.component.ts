import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CardComponentInterface } from 'src/app/cardComponents/card-interfaces/card-component-interface';
import { DeckControllerService } from 'src/app/cardComponents/card-services/deck-controller.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, CardComponentInterface, OnChanges {

  data: any;

  constructor(private deckController: DeckControllerService) {
    this.data = {
      month: 9,
      year: 2021
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
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
