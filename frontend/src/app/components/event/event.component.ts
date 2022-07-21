import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventModal: Modal | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  open() {
    this.eventModal = new Modal(document.getElementById('eventModal'), {
      keyboard: false
    });
    this.eventModal.show();
  }

}
