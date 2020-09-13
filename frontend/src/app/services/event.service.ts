import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../models/event.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private url: string;
  private eventUpdate = new Subject<IEvent>();

  constructor(
    private http: HttpClient) { }

  // Events - get all Events
  getEvents(): Observable<IEvent[]>
  {
    this.url = 'http://localhost:3000/events/';
    return this.http.get<IEvent[]>(this.url);
  }

  addEvent(event: any) {
    this.url = 'http://localhost:3000/events';
    this.http.post(this.url, event).subscribe();
  }

  editEvent(eventID: any): Observable<IEvent[]>
  {
    this.url = 'http://localhost:3000/events/' + eventID;
    return this.http.get<IEvent[]>(this.url);
  }

  deleteEvent(eventID: any): void
  {
    this.url = 'http://localhost:3000/events' + eventID;
  }

  getEventUpdateListener() {
    return this.eventUpdate.asObservable();
  }
}
