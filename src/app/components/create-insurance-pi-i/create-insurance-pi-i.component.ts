import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PersonalInfo} from "../../models/personalInfo";
import {MatDialog} from "@angular/material/dialog";
import {PersonalInfoDialogComponent} from "../personal-info-dialog/personal-info-dialog.component";

@Component({
  selector: 'create-insurance-pi-i',
  templateUrl: './create-insurance-pi-i.component.html',
  styleUrls: ['./create-insurance-pi-i.component.scss']
})
export class CreateInsurancePiIComponent implements OnInit {
  personalInfoForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    identityCardSeries: new FormControl(),
    identityCardNr: new FormControl(),
    code: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      county: new FormControl(),
      street: new FormControl(),
      number: new FormControl(),
      zipCode: new FormControl()
    }),
  });

  @Output() sendPersonInformation = new EventEmitter<PersonalInfo>();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onClick() {
    let personalInfo = this.personalInfoForm.getRawValue();
    this.sendPersonInformation.emit(personalInfo);
  }

  onNext() {
    this.onClick()
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PersonalInfoDialogComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.data)
      if (result.data!=="Cancel") {
        let name=result.data.personalInfo.name;

        this.personalInfoForm.controls["lastname"].setValue(name.split(" ")[1]);
        this.personalInfoForm.controls["firstname"].setValue(name.split(" ")[0]);
        this.personalInfoForm.controls["identityCardSeries"].setValue(result.data.personalInfo.identityCardSeries);
        this.personalInfoForm.controls["identityCardNr"].setValue(result.data.personalInfo.identityCardNr);
        this.personalInfoForm.controls["code"].setValue(result.data.personalInfo.code);
        this.personalInfoForm.patchValue({address: result.data.address});
      }
    });
  }
}
