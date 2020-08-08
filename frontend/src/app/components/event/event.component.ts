import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { EventService } from 'src/app/services/event.service';
import { IEvent } from 'src/app/models/event.model';
import { ThrowStmt } from '@angular/compiler';

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
    this.eventsrv.getEvents().subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });

    this.showCalendar();
  }

  showCalendar(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth'
    };
  }

}
