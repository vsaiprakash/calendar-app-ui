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
  // 0 to n-1 are the cards in deck
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
    if(currCardValue + 1 < this.sizeOfDeck){
      //next card is valid
      console.log("Valid Next Operation");
      this.currVisibleCardSubject.next(currCardValue + 1)
    }
    else{
      //throw error that there is no next card available
      console.log("Error! Next card is not available")
    }
  }

  moveToPreviousCard(){
    let currCardValue = this.currVisibleCardSubject.getValue();
    if(currCardValue - 1 >= 0 && currCardValue - 1 < this.sizeOfDeck){
      //next card is valid
      console.log("Valid Back Operation");
      this.currVisibleCardSubject.next(currCardValue - 1)
    }
    else{
      //throw error that there is no next card available
      console.log("Error! Previous card is not available")
    }
  }
}
