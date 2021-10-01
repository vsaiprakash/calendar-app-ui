import { Component, OnInit } from '@angular/core';
import { DeckControllerService } from 'src/app/services/deck-controller.service';

@Component({
  selector: 'app-deck-container',
  templateUrl: './deck-container.component.html',
  styleUrls: ['./deck-container.component.scss']
})
export class DeckContainerComponent implements OnInit {

  cards: any[];
  index: number = 0;

  constructor(private deckController: DeckControllerService) {
    this.cards = [
      "app-login",
      "app-login",
      "app-login",
      "app-login"
    ]
    this.deckController.setSizeOfDeck(this.cards.length);
  }

  ngOnInit(): void {
  }

}
