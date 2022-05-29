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
    return this.httpRequestService.post('insurance/addInsurance', data, null, this.headers);
  }

  getAllInsurances() {
    return this.httpRequestService.get('insurance/getInsurances', null, this.headers);
  }

  getInsurancesForCurrentUser() {
    return this.httpRequestService.get('insurance/getInsurancesForCurrentUser', null, this.headers);
  }

  getInsurancePdf() {
    return this.httpRequestService.get('insurance/getInsurancePdf');
  }

  getInsuranceById(id: number) {
    return this.httpRequestService.get('insurance/getInsuranceById/' + id, null, this.headers);
  }

  getPersonalInfoById(id: number) {
    return this.httpRequestService.get('personalInfo/getPersonalInfoById/' + id, null, this.headers);
  }

  getVehicleById(id: number) {
    return this.httpRequestService.get('vehicle/getVehicleById/' + id, null, this.headers);
  }
}
