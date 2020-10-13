import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {
  eventForm: FormGroup;

  constructor(
    private activeModal: NgbActiveModal,
    private eventModal: NgbModal,
    private formBuilder: FormBuilder
  )  {
    this.createEventForm();
  }

  ngOnInit(): void {

  }

  openModal() {

  }

  private createEventForm()
  {
    this.eventForm = this.formBuilder.group({
      title: '',
      startDate: '',
      endDate: ''
    });
  }

  submitEventFormData()
  {
    console.log(this.eventForm.value);
    this.activeModal.close();
  }

}
