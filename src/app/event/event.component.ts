import { Component, OnInit } from '@angular/core';
import {EventService} from "../shared/event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
