import { Component, OnInit } from '@angular/core';
import {InsuranceService} from "../../services/insurance.service";

@Component({
  selector: 'display-v',
  templateUrl: './display-v.component.html',
  styleUrls: ['./display-v.component.scss']
})
export class DisplayVComponent implements OnInit {
  insurances: [] = [];
  vehicles: []=[];

  constructor(private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    this.getInsurancesForCurrentUser()
  }

  getInsurancesForCurrentUser() {
    this.insuranceService.getInsurancesForCurrentUser().subscribe((data) => {
      this.insurances = data;
    });
  }

}
