import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../create-insurance-pi-i/create-insurance-pi-i.component";

@Component({
  selector: 'app-personal-info-dialog',
  templateUrl: './personal-info-dialog.component.html',
  styleUrls: ['./personal-info-dialog.component.scss']
})
export class PersonalInfoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PersonalInfoDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
