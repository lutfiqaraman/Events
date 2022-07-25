import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {};

  constructor() {}

  ngOnInit(): void {
    this.showFullCalendarPlugin();
  }

  showFullCalendarPlugin() {
    this.calendarOptions.initialView = 'dayGridMonth';
    return this.calendarOptions;
  }

}
