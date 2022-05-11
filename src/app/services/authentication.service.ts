import {Injectable} from '@angular/core';
import {HTTPRequestService} from "./http-request.service";
import {HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("accessToken")});

  constructor(private httpRequestService: HTTPRequestService) {
  }

  login(email: string, password: string) {
    let map = new Map<string, string>()
      .set('username', email)
      .set('password', password);
    const result = Object.fromEntries(map);
    console.log(result)

    return this.httpRequestService.post('login', result, null, undefined);
  }

  logout(email: string) {
    let params = new HttpParams();
    params = params.append('email', email);


    return this.httpRequestService.post('logout', params, null);
  }
}
