import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
export class DeckContainerComponent implements OnInit, OnDestroy {

  cards: any[];
  index: number = 0;

  @ViewChild(CardDirective, {static: true}) appCard!: CardDirective;
  interval: any;

  constructor(
    private deckController: DeckControllerService,
    private deckData: DeckDataService,
    private componentFactoryResolver: ComponentFactoryResolver) {
      this.cards = this.deckData.getDeckData();
      this.deckController.setSizeOfDeck(this.cards.length);
  }

  ngOnInit(): void {
    this.loadComponent();
    // this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.index = (this.index + 1) % this.cards.length;
    const componentItem = this.cards[this.index];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentItem.component);

    const viewContainerRef = this.appCard.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
    componentRef.instance.data = componentItem.data;
  }

  // getAds() {
  //   this.interval = setInterval(() => {
  //     this.loadComponent();
  //   }, 3000);
  // }

}
