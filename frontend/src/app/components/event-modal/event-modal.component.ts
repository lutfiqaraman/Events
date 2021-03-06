import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {
  eventForm: FormGroup;
  eventModel: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private eventSrv: EventService,
    private formBuilder: FormBuilder
  )  {
    this.createEventForm();
  }

  ngOnInit(): void {

  }

  openModal(event: any) {
    this.eventModel = this.modalService.open(event);
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
    const data = this.eventForm.value;
    this.eventSrv.addEvent(data);
    this.eventModel.close();
  }

}
