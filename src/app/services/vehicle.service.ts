import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {HTTPRequestService} from "./http-request.service";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("accessToken")});

  constructor(private httpRequestService: HTTPRequestService) {
  }

  getVehicleById(id: number) {
    return this.httpRequestService.get('vehicle/getVehicleById/' + id, null, this.headers);
  }
}
