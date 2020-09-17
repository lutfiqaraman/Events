import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../models/event.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private url: string;
  private eventsList: IEvent[] = [];
  private eventUpdate = new Subject<IEvent[]>();

  constructor(
    private http: HttpClient
  ) { }

  // Events - get all Events
  getEvents(): Observable<IEvent[]>
  {
    this.url = 'http://localhost:3000/events/';
    return this.http.get<IEvent[]>(this.url);
  }

  // Events - get a single event based on id
  getAnEvent(id: any): Observable<IEvent[]>
  {
    this.url = 'http://localhost:3000/events/' + id;
    return this.http.get<IEvent[]>(this.url);
  }

  addEvent(event: any) {
    this.url = 'http://localhost:3000/events';
    this.http.post(this.url, event).subscribe();
  }

  getEventUpdateListener() {
    return this.eventUpdate.asObservable();
  }

  updateEvent(eventID: any, event: IEvent)
  {
    this.url = 'http://localhost:3000/events/' + eventID;

    this.http.put(this.url, event).subscribe((response) => {
      const updateEvent = [...this.eventsList];
      const oldPostIndex = updateEvent.findIndex(p => p.id === event.id);

      updateEvent[oldPostIndex] = event;

      this.eventsList = updateEvent;
      this.eventUpdate.next([...this.eventsList]);
    });
  }

  deleteEvent(eventID: any): void
  {
    this.url = 'http://localhost:3000/events' + eventID;
  }

}
