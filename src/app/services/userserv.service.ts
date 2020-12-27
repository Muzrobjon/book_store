import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class UserservService {


  constructor(public http: HttpClient) { }

  public addUser(user: any): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:3000/users',user);
  }

  public viewUser(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/users');
  }

  public removeUser(elem) {
    let url = 'http://localhost:3000/users' + elem.id;
    return this.http.delete(url);
  }

  // public Login(username: string, pass:string) {
  //   return this.http.get<any[]>('http://localhost:3000/users?username='+username+'&password='+pass);   
  // }
  public Login(username: string, pass:string): Observable<any[]> {
    class auth {
      constructor(username: string, password: string) {
        return {
          username: username,
          password: password
        }
      }
    }
    return this.http.post<any[]>('http://localhost:3000/users/login', new auth(username, pass));
  }
}
