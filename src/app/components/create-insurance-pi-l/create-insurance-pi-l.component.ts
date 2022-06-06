import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {PersonalInfo} from "../../models/personalInfo";
import {MatDialog} from "@angular/material/dialog";
import {OrganizationalInfoDialogComponent} from "../organizational-info-dialog/organizational-info-dialog.component";

@Component({
  selector: 'create-insurance-pi-l',
  templateUrl: './create-insurance-pi-l.component.html',
  styleUrls: ['./create-insurance-pi-l.component.scss']
})
export class CreateInsurancePiLComponent implements OnInit {
  @Input()
  personalInfoForm: FormGroup = new FormGroup({});

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
    let dialogRef = this.dialog.open(OrganizationalInfoDialogComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.data)
      if (result.data !== "Cancel") {
        this.personalInfoForm.controls["name"].setValue(result.data.personalInfo.name);
        this.personalInfoForm.controls["identificationNr"].setValue(result.data.personalInfo.code);
        this.personalInfoForm.patchValue({address: result.data.address});
      }
    });
  }
}
