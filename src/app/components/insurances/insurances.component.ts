import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.css']
})
export class InsurancesComponent implements OnInit {
  insurances: any;

  constructor() { }

  ngOnInit(): void {
  }

}
