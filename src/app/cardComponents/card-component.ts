import { Type } from '@angular/core';

export class Card {
  constructor( public id: string, public component: Type<any>) {}
}