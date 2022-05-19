import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {HTTPRequestService} from "./http-request.service";

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("accessToken")});

  constructor(private httpRequestService: HTTPRequestService) {
  }

  createInsurance(data: Object) {
    return this.httpRequestService.post('insurance/addInsurance', data, null, this.headers).subscribe();
  }
}
