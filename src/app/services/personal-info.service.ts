import {Injectable} from '@angular/core';
import {HTTPRequestService} from "./http-request.service";
import {PersonalInfo} from "../models/personalInfo";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("accessToken")});

  constructor(private httpRequestService: HTTPRequestService) {
  }

  addPersonalInfo(personalInfo: PersonalInfo) {
    return this.httpRequestService.post('personalInfo/addPersonalInfo', personalInfo, null, this.headers).subscribe();
  }
}
