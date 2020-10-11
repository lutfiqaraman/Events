import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {

  constructor(private modalService: NgbModal)  { }

  ngOnInit(): void {

  }

  openModal(event: any) {
    this.modalService
    .open(event, { ariaLabelledBy: 'event-modal' });
  }

}
