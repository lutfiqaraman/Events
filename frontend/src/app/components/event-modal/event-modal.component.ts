import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {
  eventForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

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
    const title = this.eventForm.get('eventtitle').value;

    this.activeModal.close();
  }

}
