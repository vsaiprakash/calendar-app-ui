import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { monthDictionary } from './calendar.data';

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.scss']
})
export class CalendarTableComponent implements OnInit {

  noOfDays: number;
  today: number;
  startWeekDay: string;
  endWeekDay: string;

  month: number;
  monthName: string;

  firstDayDate: Date;
  lastDayDate: Date;

  year: number;

  temp: number;

  constructor() {

    var date = new Date();

    this.month = date.getMonth();
    this.monthName = monthDictionary[this.month];

    this.year = date.getFullYear();

    this.firstDayDate = new Date(this.year, this.month, 1);
    this.lastDayDate = new Date(this.year, this.month + 1, 0);

    this.today = date.getDay();
    this.temp = date.getDate();

    this.noOfDays = this.daysInMonth(this.month, this.year);
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
