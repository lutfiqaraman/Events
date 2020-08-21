import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/event/event.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: EventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  NavbarComponent,
  HomeComponent,
  EventComponent,
  FormModalComponent
];
