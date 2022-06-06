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

  getPersonalInfoForCurrentUser(personType: number) {
    console.log(personType)
    return this.httpRequestService.get('insurance/getPersonalInfoForCurrentUser/' + personType, null, this.headers);
  }

  getPersonalInfoById(id: number) {
    return this.httpRequestService.get('personalInfo/getPersonalInfoById/' + id, null, this.headers);
  }
}
