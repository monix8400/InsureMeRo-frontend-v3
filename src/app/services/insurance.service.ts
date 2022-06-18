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

  getInsurancePdf(id: number) {
    return this.httpRequestService.get('insurance/getInsurancePdf/' + id,null,this.headers,'blob');
  }

  getInsuranceById(id: number) {
    return this.httpRequestService.get('insurance/getInsuranceById/' + id, null, this.headers);
  }

  getInsurancePrices(){
    return this.httpRequestService.get('insurance/getInsurancePrices', null, this.headers);
  }
}
