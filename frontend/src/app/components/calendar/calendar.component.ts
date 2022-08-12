import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendar: CalendarOptions = {};
  eventsList = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.showFullCalendarPlugin();
    this.getAllEvents();
  }

  showFullCalendarPlugin() {
    this.calendar.initialView = 'dayGridMonth';
    return this.calendar;
  }

  getAllEvents() {
    this.eventService.getEvents().subscribe(result =>
      this.eventsList.push(result)
    );

    console.log(this.eventsList);
  }

}
