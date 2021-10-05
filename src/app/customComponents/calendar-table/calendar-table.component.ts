import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.scss']
})
export class CalendarTableComponent implements OnInit {

  noOfDays: number;
  startWeekDay: string;
  endWeekDay: string;

  constructor() {
    this.noOfDays = this.daysInMonth(9, 2021);
    console.log("this.noOfDays: "+this.noOfDays);
  }

  ngOnInit(): void {
    this.noOfDays = this.daysInMonth(9, 2021);
    console.log("this.noOfDays: "+this.noOfDays);
  }

  private daysInMonth(month, year): number{
    return new Date(year, month, 0).getDate();
  }
}
