import { Component, OnInit } from '@angular/core';
import { DeckControllerService } from 'src/app/services/deck-controller.service';

@Component({
  selector: 'app-deck-container',
  templateUrl: './deck-container.component.html',
  styleUrls: ['./deck-container.component.scss']
})
export class DeckContainerComponent implements OnInit {

  cards: any[];

  constructor(private deckController: DeckControllerService) {
    this.cards = []
    this.deckController.setSizeOfDeck(this.cards.length);
  }

  ngOnInit(): void {
  }

}
