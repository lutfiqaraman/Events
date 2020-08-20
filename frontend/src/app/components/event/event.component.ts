import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { EventService } from 'src/app/services/event.service';
import { IEvent } from 'src/app/models/event.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  closeResult = '';
  @ViewChild('content') content: any;
  calendarOptions: CalendarOptions;
  events: IEvent[] = [];

  constructor(
    public eventsrv: EventService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.eventsrv.getEvents().subscribe((data) => {
      this.events = data;
      this.showCalendar(this.events);
    }, (err: HttpErrorResponse) => {
      const error = `Cannot get events. Got ${err.message}`;
      alert(error);
    });
  }

  showCalendar(eventsList: any) {
    this.calendarOptions = {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'dayGridMonth',
      events: eventsList
    };
  }

  showModel(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
