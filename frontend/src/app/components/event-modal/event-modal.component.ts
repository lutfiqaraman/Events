import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  )  { }

  ngOnInit(): void {

  }

  openModal(event: any) {
    this.modalService
    .open(event);
  }

}
