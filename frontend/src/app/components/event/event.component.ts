import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  calendarOptions: CalendarOptions;

  constructor() { }

  ngOnInit(): void {
    this.showCalendar();
  }

  showCalendar(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth'
    };
  }

}
