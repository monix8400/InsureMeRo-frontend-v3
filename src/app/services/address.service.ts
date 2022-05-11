import {Injectable} from '@angular/core';
import {HTTPRequestService} from "./http-request.service";
import {HttpHeaders} from "@angular/common/http";
import {Address} from "../models/address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("accessToken")});

  constructor(private httpRequestService: HTTPRequestService) {
  }

  addAddress(address: Address) {
    return this.httpRequestService.post('address/addAddress', address, null, this.headers).subscribe();
  }
}
