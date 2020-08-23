import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {
  eventForm: FormGroup;

  constructor(
    public eventsrv: EventService,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createAddEventForm();
  }

  private createAddEventForm() {
    this.eventForm = this.formBuilder.group({
      eventstart: '',
      eventend: '',
      eventtitle: ''
    });
  }

  submitEvent() {

    const sDate = this.eventForm.get('eventstart').value;
    const eDate = this.eventForm.get('eventend').value;
    const eventTitle = this.eventForm.get('eventtitle').value;

    const eventObj = {
      title: eventTitle,
      start: sDate,
      end: eDate
    };

    this.eventsrv.addEvent(eventObj);
    this.activeModal.close();
  }

}
