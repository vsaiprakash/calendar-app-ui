import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewControllerService } from '../views/view-controller.service';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss']
})
export class ViewContainerComponent implements OnInit {

  constructor(
    private viewController: ViewControllerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  goToNextView(){
    console.log("Next clicked !");
    this.viewController.moveToNextCard();

    this.router.navigateByUrl(this.viewController.getCurrViewState().toString());
  }

  goToPreviousView(){
    console.log("Back clicked !");
    this.viewController.moveToPreviousCard();

    this.router.navigateByUrl(this.viewController.getCurrViewState().toString());
  }
}
