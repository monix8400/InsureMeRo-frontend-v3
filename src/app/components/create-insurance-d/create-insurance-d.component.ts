import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'create-insurance-d',
  templateUrl: './create-insurance-d.component.html',
  styleUrls: ['./create-insurance-d.component.css']
})
export class CreateInsuranceDComponent implements OnInit {
  driverForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    idSeries: new FormControl(),
    idNumber: new FormControl(),
    cnpCode: new FormControl()
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onNext() {
    console.log(this.driverForm.value)
    this.onClick()
  }

  private onClick() {
    let name = this.driverForm.controls['firstname'].value + ' ' + this.driverForm.controls['lastname'].value;
    let idSeries = this.driverForm.controls['idSeries'].value;
    let idNr = this.driverForm.controls['idNumber'].value;
    let code = this.driverForm.controls['cnpCode'].value;
  }
}
