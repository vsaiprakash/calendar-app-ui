import { AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CardDirective } from '../directives/card.directive';
import { DeckDataService } from '../services/deck-data.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit, AfterViewChecked, AfterViewInit {

  index: number = 0;

  @ViewChild(CardDirective, {static: true}) appCard!: CardDirective;

  @Input('componentIndex')
  componentIndex: number;

  constructor(
    private deckData: DeckDataService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.loadComponent();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    // this.loadComponent();
  }

  loadComponent() {
    console.log("Loading I: "+this.componentIndex);
    const componentItem = this.deckData.getDeckDataAt(this.componentIndex)

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentItem.component);

    console.log(componentItem);

    // const viewContainerRef = this.viewContainerRef;
    // // viewContainerRef.clear();

    // const componentRef = viewContainerRef.createComponent<any>(componentFactory);

    // componentRef.instance.data = componentItem.data;

    const viewContainerRef = this.appCard.viewContainerRef;
    // viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(componentFactory);

    componentRef.instance.data = componentItem.data;
  }

}
