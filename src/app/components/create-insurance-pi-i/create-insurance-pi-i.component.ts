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
      zip: new FormControl()
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
    const dialogRef = this.dialog.open(PersonalInfoDialogComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.sendPersonInformation.emit(result);
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
export interface DialogData {
  animal: string;
  name: string;
}
