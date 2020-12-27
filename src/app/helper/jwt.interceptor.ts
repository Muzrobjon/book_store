import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { LoginservService } from '../services/loginserv.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(public loginService: LoginservService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
        if (this.loginService.isLoggedin) {
             const token = localStorage.getItem('token');
             request = request.clone({
                 setHeaders: {
                    'jwt-token': `${token}`
                 }
             })
        }
        return next.handle(request);
    }
}