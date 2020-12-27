import { Component, OnInit, Input } from '@angular/core';
import { LoginservService } from '../services/loginserv.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() qidiruv: boolean;

  logout() {
    this.lognserv.logout();
  }
  constructor(public lognserv: LoginservService) { }

  ngOnInit() {
  }

}
