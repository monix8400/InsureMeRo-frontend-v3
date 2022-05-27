import {Injectable} from '@angular/core';
import {HTTPRequestService} from "./http-request.service";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("accessToken")});

  constructor(private httpRequestService: HTTPRequestService) {
  }

  getPersonalInfoForCurrentUser() {
    return this.httpRequestService.get('insurance/getPersonalInfoForCurrentUser', null, this.headers);
  }
}
