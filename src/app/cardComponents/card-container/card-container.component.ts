import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  @Input('componentIndex')
  componentIndex: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
