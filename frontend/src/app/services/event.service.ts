import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../models/event.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private url: string;

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
}
