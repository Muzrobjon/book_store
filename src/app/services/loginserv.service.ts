import { Injectable } from '@angular/core';
import { UserservService } from './userserv.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginservService {

  public isLoggedin: boolean = false;
  public users = [];
  
  public login(loginData: any) {
    return this.http.post<any>('http://localhost:3000/login', loginData);
  }

  logout() {
    this.isLoggedin = false; 
  }
  constructor(public userserv: UserservService, private http: HttpClient) { }
  
}
