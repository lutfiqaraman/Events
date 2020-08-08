import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { EventService } from 'src/app/services/event.service';
import { IEvent } from 'src/app/models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  calendarOptions: CalendarOptions;
  events: IEvent[] = [];

  constructor(public eventsrv: EventService) { }

  ngOnInit(): void {
    this.showCalendar();
  }

  showCalendar(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth'
    };
  }

}
