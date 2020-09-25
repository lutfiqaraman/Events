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
  public eventForm: FormGroup;

  constructor(
    public eventsrv: EventService,
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder)
    { }

  ngOnInit(): void {
    this.createAddEventForm();
  }

  private createAddEventForm() {
    this.eventForm = this.formBuilder.group({
      eventtitle: '',
      eventstart: '',
      eventend: ''
    });
  }

  submitEvent() {

    const eventObj = {
      title: this.eventForm.get('eventtitle').value,
      start: this.eventForm.get('eventstart').value,
      end: this.eventForm.get('eventend').value
    };

    this.eventsrv.addEvent(eventObj);
    this.activeModal.close();
  }

}
