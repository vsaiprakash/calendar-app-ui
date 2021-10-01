import { AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CardDirective } from '../card-directives/card.directive';
import { DeckDataService } from '../card-services/deck-data.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit, AfterViewChecked, AfterViewInit {

  index: number = 0;

  @ViewChild(CardDirective) appCard: CardDirective;
//@ViewChild(CardDirective, {static: true}) appCard!: CardDirective;

  @Input('componentIndex')
  componentIndex: number;

  constructor(
    private deckData: DeckDataService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    if(this.componentIndex==undefined){
      this.componentIndex = -1;
    }
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    if(this.componentIndex!=undefined && this.componentIndex!=-1){
      //load component only if it is selected card
      this.loadComponent();
    }
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    // this.loadComponent();
  }

  loadComponent() {
    const componentItem = this.deckData.getDeckDataAt(this.componentIndex)

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentItem.component);

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
