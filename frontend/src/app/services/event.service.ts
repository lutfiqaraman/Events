import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from '../models/event.model';
import { pipe } from 'rxjs';
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
  getEvents() {
    this.url = 'http://localhost:3000/events/';

    this.http
      .get<IEvent[]>(this.url)
      .pipe(map((eventData) => {
        return eventData.map((event: any) => {
          return {
            id: event._id,
            title: event.title,
            description: event.description,
            className: event.className,
            start: event.start,
            end: event.end
          };
        });
      }))
      .subscribe((eventData) => {
        this.eventsList = eventData;
      });
  }
}
