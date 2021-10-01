import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CardComponentInterface } from 'src/app/cardComponents/card-interfaces/card-component-interface';
import { DeckControllerService } from 'src/app/cardComponents/card-services/deck-controller.service';
import { LoginComponent } from 'src/app/views/login/login.component';
import { CardDirective } from '../card-directives/card.directive';
import { DeckDataService } from '../card-services/deck-data.service';

import * as _ from "lodash";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-deck-container',
  templateUrl: './deck-container.component.html',
  styleUrls: ['./deck-container.component.scss']
})
export class DeckContainerComponent implements OnInit, OnDestroy {

  cards: any[];
  selectedIndex: number;
  lodash: any;

  deckControllerSub: Subscription;

  constructor(
    private deckController: DeckControllerService,
    private deckData: DeckDataService) {
      this.lodash = _;
      this.cards = this.deckData.getDeckData();
      this.deckController.setSizeOfDeck(this.cards.length);
      this.selectedIndex = 0;
  }

  ngOnInit(): void {
    //initial index is first
    this.selectedIndex = 0;

    this.deckControllerSub = this.deckController.currStateOfDeck().subscribe(res => {
      this.selectedIndex = res;
    });
  }

  ngOnDestroy(): void{
    this.deckControllerSub.unsubscribe();
  }

}
