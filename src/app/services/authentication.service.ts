import {Injectable} from '@angular/core';
import {HTTPRequestService} from "./http-request.service";
import {HttpHeaders} from "@angular/common/http";

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
    return this.httpRequestService.post('login', result, null, undefined);
  }

}
