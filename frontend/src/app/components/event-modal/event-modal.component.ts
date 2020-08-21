import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {
  eventForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe) { }

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
    const eventStartDate = this.datePipe.transform(sDate, 'yyyy-MM-dd');

    const eDate = this.eventForm.get('eventend').value;
    const eventEndDate = this.datePipe.transform(eDate, 'yyyy-MM-dd');

    const eventTitle = this.eventForm.get('eventtitle').value;

    const eventObj = {
      title: eventTitle,
      start: eventStartDate,
      end: eventEndDate
    };

    this.activeModal.close();
  }

}
