import {Injectable} from '@angular/core';
import {HTTPRequestService} from "./http-request.service";
import {HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpRequestService: HTTPRequestService) {
  }

  // login(email: string, password: string) {
  //   let params = new HttpParams();
  //   params = params.append('email', email);
  //   params = params.append('password', password);
  //   return this.httpRequestService.post('login/', params);
  // }

  login(email: string, password: string) {
    let map = new Map<string, string>()
      .set('username', email)
      .set('password', password);
    const result = Object.fromEntries(map);
    console.log(result)

    return this.httpRequestService.post('login', result);
  }

  logout(email: string) {
    let params = new HttpParams();
    params = params.append('email', email);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
    });
    let options = {headers: headers};
    return this.httpRequestService.post('logout', params, options);
  }
}
