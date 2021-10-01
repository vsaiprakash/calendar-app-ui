import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { CardComponentInterface } from 'src/app/cardComponents/interfaces/card-component-interface';
import { DeckControllerService } from 'src/app/cardComponents/services/deck-controller.service';
import { LoginComponent } from 'src/app/views/login/login.component';
import { CardDirective } from '../directives/card.directive';
import { DeckDataService } from '../services/deck-data.service';

@Component({
  selector: 'app-deck-container',
  templateUrl: './deck-container.component.html',
  styleUrls: ['./deck-container.component.scss']
})
export class DeckContainerComponent implements OnInit {

  cards: any[];
  index: number = 0;

  constructor(
    private deckController: DeckControllerService,
    private deckData: DeckDataService) {
      this.cards = this.deckData.getDeckData();
      this.deckController.setSizeOfDeck(this.cards.length);
  }

  ngOnInit(): void {
  }

}
