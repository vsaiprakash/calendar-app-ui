import { Injectable } from '@angular/core';
import { viewRoutes } from './view.routes';

const initialValue = 1;

@Injectable({
  providedIn: 'root'
})
export class ViewControllerService {

  private currViewState: number;
  private noOfViews: number;

  constructor() {
    this.currViewState = initialValue;
    this.noOfViews = viewRoutes.length;
  }

  getCurrViewState(): number {
    return this.currViewState;
  }

  moveToNextCard(){
    if(this.currViewState + 1 <= this.noOfViews){
      //next card is valid
      console.log("Valid Next Operation");
      this.currViewState++;
    }
    else{
      //throw error that there is no next card available
      console.log("Error! Next card is not available")
    }
  }

  moveToPreviousCard(){
    if(this.currViewState - 1 > 0 && this.currViewState - 1 < this.noOfViews){
      //next card is valid
      console.log("Valid Back Operation");
      this.currViewState--;
    }
    else{
      //throw error that there is no next card available
      console.log("Error! Previous card is not available")
    }
  }
}
