import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertModule, CollapseModule} from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/navbar/navbar.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { EventcardComponent } from './event/eventcard/eventcard.component';
import { FooterComponent } from './core/footer/footer.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ProfileEditComponent } from './user/profile-edit/profile-edit.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventListComponent } from './event/event-list/event-list.component';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BidComponent } from './ticket/bid/bid.component';
import { TicketDetailsComponent } from './ticket/ticket-details/ticket-details.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import {EventService} from "./shared/event.service";
import {UserService} from "./shared/user.service";
import {TicketService} from "./shared/ticket.service";
import {LoggedInGuard} from "./shared/logged-in.guard";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    EventcardComponent,
    FooterComponent,
    EventComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    ProfileEditComponent,
    EventDetailComponent,
    EventListComponent,
    AboutComponent,
    HomeComponent,
    BidComponent,
    TicketDetailsComponent,
    TicketListComponent,
    TicketComponent,
      ...AppRoutingModule.routableComponents,
      PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [EventService, UserService, TicketService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
