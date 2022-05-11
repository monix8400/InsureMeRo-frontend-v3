import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'create-insurance-choose-type-pi',
  templateUrl: './create-insurance-choose-type-pi.component.html',
  styleUrls: ['./create-insurance-choose-type-pi.component.css']
})
export class CreateInsuranceChooseTypePiComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClickIndividual() {
    this.router.navigateByUrl('create-insurance-pi-i').then(r => console.log(r));
  }

  onClickLegalPerson() {
    this.router.navigateByUrl('create-insurance-pi-l').then(r => console.log(r));
  }
}
