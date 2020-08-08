import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../models/event.model';
import { pipe, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsList: IEvent[] = [];
  private url: string;

  constructor(private http: HttpClient) { }

  // Events - get all Events
  getEvents(): Observable<IEvent[]>
  {
    this.url = 'http://localhost:3000/events/';

    return this.http
      .get<IEvent[]>(this.url);
  }
}
