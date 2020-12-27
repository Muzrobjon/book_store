import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserservService } from '../services/userserv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registor-user',
  templateUrl: './registor-user.component.html',
  styleUrls: ['./registor-user.component.css']
})
export class RegistorUserComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('');
  message: string;
  public users$: Observable<any[]>
  register() { 
    let user ={
      username: this.username.value,
      password: this.password.value
    }

    this.userserv.addUser(user).subscribe(() => {
      console.log("Qoshildi");
    })
  }

  remove(elem) {
    this.userserv.removeUser(elem).subscribe((rs) => {
      console.log(rs);
    })
  };
  
  constructor(public userserv: UserservService) { }

  ngOnInit() {
    this.users$ = this.userserv.viewUser();
  }

}
