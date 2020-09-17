import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { EventService } from 'src/app/services/event.service';
import { IEvent } from 'src/app/models/event.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventModalComponent } from '../event-modal/event-modal.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @ViewChild('calendar') calendar: FullCalendarComponent;
  @ViewChild('editProfileModal') editmodal: any;
  calendarOptions: CalendarOptions;
  events: IEvent[] = [];
  event: IEvent;
  editProfileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public eventsrv: EventService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.fetchEvents();
    this.editProfileForm = this.fb.group({
      titleevent: '',
      lastname: [''],
      username: [''],
      email: ['']
     });
  }

  showCalendar() {
    this.calendarOptions = {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'dayGridMonth',
      events: this.eventsContent.bind(this),
      eventClick: this.displayEvent.bind(this)
    };
  }

  openEventModal(): void {
    const modalRef = this.modalService.open(EventModalComponent);
    modalRef.result
    .then(() => {
      const calendarAPI = this.calendar.getApi();
      calendarAPI.refetchEvents();
    })
    .catch(() => {
      console.log('Error: add event form');
    });
  }

  updateEventModal(): void {
    const modalRef = this.modalService.open(EventModalComponent);
  }

  eventsContent(fetchInfo: any, successCallback: any, failureCallback: any) {
    successCallback(this.events);

    failureCallback(() => {
      alert('Fail to show events content');
    });

    this.fetchEvents();
  }

  fetchEvents() {
    this.eventsrv.getEvents().subscribe((data) => {
      this.events = data;
      this.showCalendar();
    }, (err: HttpErrorResponse) => {
      alert(`Cannot get events. Got ${err.message}`);
    });
  }

  displayEvent(info: any) {
    const eventId = info.event.extendedProps._id;
    this.eventsrv.getAnEvent(eventId).subscribe((result) => {
      this.openModal(this.editmodal, result);
    });
  }

  openModal(targetModal: any, event: any) {
    console.log(event);
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });

    this.editProfileForm.patchValue({
     titleevent: event.title,
     lastname: 'user.lastname',
     username: 'user.username',
     email: 'user.email'
    });
   }

}
