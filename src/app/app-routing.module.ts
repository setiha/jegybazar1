
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import {EventComponent} from './event/event.component';
import {TicketComponent} from './ticket/ticket.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './user/login/login.component';
import {RegistrationComponent} from './user/registration/registration.component';
import {EventListComponent} from './event/event-list/event-list.component';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';
import {TicketListComponent} from './ticket/ticket-list/ticket-list.component';
import {TicketDetailsComponent} from './ticket/ticket-details/ticket-details.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'event', component: EventComponent,
    children:
      [
        {path: 'list', component: EventListComponent},
        {path: 'new', component: EventDetailComponent},
        {path: ':id', component: EventDetailComponent},
        ]
  },
  {path: 'about', component: AboutComponent},
  {
    path: 'ticket', component: TicketComponent,
    children: [
      {path: 'list', component: TicketListComponent},
      {path: 'new', component: TicketDetailsComponent},
      {path: ':id/bid', component: TicketDetailsComponent}
    ]
  },
  {path: 'user',
  children: [
    {path: '', component: ProfileComponent},
    {path: 'edit', component: ProfileEditComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent}
  ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static routableComponents = [
    HomeComponent,
    EventComponent,
    EventListComponent,
    EventDetailComponent,
    TicketComponent,
    TicketListComponent,
    TicketDetailsComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    RegistrationComponent,

  ];
}
