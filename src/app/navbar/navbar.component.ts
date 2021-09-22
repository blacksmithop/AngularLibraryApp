import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;

  constructor(private login: LoginService,) {
    this.loggedIn = this.login.loggedIn();
  }


  ngOnInit(): void {
  }

  endSession() {
    console.log("Logging out")
    this.login.logout()
  }

}
