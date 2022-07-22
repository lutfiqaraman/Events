import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventModal: Modal | undefined;
  eventForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventName     : ['', [Validators.required]],
      eventDateFrom : ['', [Validators.required]],
      eventDateTo   : ['', [Validators.required]]
    });
  }

  open() {
    this.eventModal = new Modal(document.getElementById('eventModal'), {
      keyboard: false
    });
    this.eventModal.show();
  }

  onSubmit() {
    console.log('you click save !');
  }

}
