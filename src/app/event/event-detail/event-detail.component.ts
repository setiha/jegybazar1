import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../shared/event-model';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../shared/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
event: EventModel;
  constructor(private _route: ActivatedRoute,
  private _eventService: EventService) { }

  ngOnInit(){
    const evId = + this._route.snapshot.params['id'];
    if (evId) {
      this.event = this._eventService.getEventById(evId);
      console.log(this.event);
    }else{
      this.event = new EventModel(EventModel.emptyEvent);
      console.log('nem kaptunk eventet');
    }
  }
  onSubmit(form){
    console.log(form);
  }
}
