import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendar: CalendarOptions = {};

  constructor() {}

  ngOnInit(): void {
    this.showFullCalendarPlugin();
    this.getAllEvents();
  }

  showFullCalendarPlugin() {
    this.calendar.initialView = 'dayGridMonth';
    return this.calendar;
  }

  getAllEvents() {

  }

}
