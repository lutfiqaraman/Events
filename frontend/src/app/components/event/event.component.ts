import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { EventService } from 'src/app/services/event.service';
import { IEvent } from 'src/app/models/event.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventModalComponent } from '../event-modal/event-modal.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @ViewChild('calendar') calendar: FullCalendarComponent;
  calendarOptions: CalendarOptions;

  events: IEvent[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
