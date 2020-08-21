import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
    this.activeModal.close();
  }

}
