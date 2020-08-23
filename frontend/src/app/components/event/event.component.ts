import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { EventService } from 'src/app/services/event.service';
import { IEvent } from 'src/app/models/event.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventModalComponent } from '../event-modal/event-modal.component';
import { error } from 'protractor';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @ViewChild('calendar') calendar: FullCalendarComponent;
  calendarOptions: CalendarOptions;
  events: IEvent[] = [];

  constructor(
    public eventsrv: EventService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.eventsrv.getEvents().subscribe((data) => {
      this.events = data;
      this.showCalendar(this.events);
    }, (err: HttpErrorResponse) => {
      const error = `Cannot get events. Got ${err.message}`;
      alert(error);
    });
  }

  showCalendar(eventsList: any) {
    this.calendarOptions = {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'dayGridMonth',
      events: this.fetchEvents.bind(this)
    };
  }

  openEventModal(): void {
    const modalRef = this.modalService.open(EventModalComponent);
    modalRef.result
    .then(() => {
      const cal = this.calendar.getApi();
      cal.refetchEvents();
    })
    .catch((error) => { console.log(error); });
  }

  fetchEvents(fetchInfo: any, successCallback, failureCallback) {
    successCallback(this.events);
  }

}
