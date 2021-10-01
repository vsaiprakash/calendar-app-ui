import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckControllerService {

  private currVisibleCardSubject: BehaviorSubject<number>;
  private $currVisibleCard: Observable<number>;

  //[0,1,2] => 3 cards in deck
  //[0] => 1 card in deck
  private sizeOfDeck: number;

  constructor() {
    this.sizeOfDeck = 4;
    this.currVisibleCardSubject = new BehaviorSubject(0);
    this.$currVisibleCard = this.currVisibleCardSubject.asObservable()
  }

  setSizeOfDeck(newSize: number): void{
    this.sizeOfDeck = newSize;
  }

  currStateOfDeck(): Observable<number>{
    return this.$currVisibleCard;
  }

  moveToNextCard(){
    let currCardValue = this.currVisibleCardSubject.getValue();
    if(currCardValue + 1 <= this.sizeOfDeck){
      //next card is valid
      this.currVisibleCardSubject.next(currCardValue + 1)
    }
    else{
      //throw error that there is no next card available
      console.log("Error! Next card is not available")
    }
  }

  moveToPreviousCard(){
    let currCardValue = this.currVisibleCardSubject.getValue();
    if(currCardValue - 1 >= 1 && currCardValue - 1 <= this.sizeOfDeck){
      //next card is valid
      this.currVisibleCardSubject.next(currCardValue - 1)
    }
    else{
      //throw error that there is no next card available
      console.log("Error! Previous card is not available")
    }
  }
}
