import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;

  constructor( public usersService: UserService) { }

  ngOnInit(): void {
  }

  logout() {
    this.usersService.logout();
  }
}
