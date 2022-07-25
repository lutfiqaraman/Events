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
  isSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventName      : ['', [Validators.required, Validators.minLength(3)]],
      eventStartDate : ['', [Validators.required]],
      eventEndDate   : ['', [Validators.required]]
    });
  }

  open() {
    this.eventModal = new Modal(document.getElementById('eventModal'), {
      keyboard: false
    });
    this.eventModal.show();
  }

  get formControls() {
    return this.eventForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.eventForm.invalid) {
      return;
    }
  }

}
