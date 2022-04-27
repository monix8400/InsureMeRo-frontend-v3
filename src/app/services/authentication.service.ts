import { Injectable } from '@angular/core';
import {HTTPRequestService} from "./http-request.service";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpRequestService: HTTPRequestService) { }

  login(email: string, password: string) {
    let params = new HttpParams();
    params = params.append('email', email);
    params = params.append('password', password);
    return this.httpRequestService.post('login/', params);
  }

  logout(email: string) {
    let params = new HttpParams();
    params = params.append('email', email);
    return this.httpRequestService.post('logout/', params);
  }
}
