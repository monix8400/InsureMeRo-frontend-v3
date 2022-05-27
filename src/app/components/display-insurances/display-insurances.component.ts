import {Component, OnInit} from '@angular/core';
import {InsuranceService} from "../../services/insurance.service";
import {Router} from "@angular/router";

@Component({
  selector: 'display-insurances',
  templateUrl: './display-insurances.component.html',
  styleUrls: ['./display-insurances.component.scss']
})
export class DisplayInsurancesComponent implements OnInit {
  insurances: [] = [];

  constructor(private insuranceService: InsuranceService, private router: Router) {
  }

  ngOnInit(): void {
    this.getInsurancesForCurrentUser()
  }

  getInsurancesForCurrentUser() {
    this.insuranceService.getInsurancesForCurrentUser().subscribe((data) => {
      this.insurances = data;
    });
  }

  onClick() {
    this.router.navigateByUrl('create-insurance-stepper').then(r => console.log(r));
  }
}
