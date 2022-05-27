import {Component, OnInit, Renderer2,} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {PersonalInfoService} from "../../services/personal-info.service";

@Component({
  selector: 'app-personal-info-dialog',
  templateUrl: './personal-info-dialog.component.html',
  styleUrls: ['./personal-info-dialog.component.scss']
})
export class PersonalInfoDialogComponent implements OnInit {
  personalInfoList: [] = [];
  personalInfo: any;

  constructor(public dialogRef: MatDialogRef<PersonalInfoDialogComponent>, private personalInfoService: PersonalInfoService, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.getPersonalInfoForCurrentUser()
  }

  getPersonalInfoForCurrentUser() {
    this.personalInfoService.getPersonalInfoForCurrentUser().subscribe((data) => {
      this.personalInfoList = data;
      console.log("PI-I:" + JSON.stringify(this.personalInfoList))
    });
  }

  onNoClick(): void {
    this.dialogRef.close({data: 'you cancelled'});
  }

  onSelect(item: any) {
    this.personalInfo = item;
    //sa fac sa ramana selectat !!!!!!!!
    // this.renderer.addClass(elem.nativeElement, "active");
    // this.renderer.removeClass(this.item.nativeElement, "active");
  }

  onClick() {
    this.dialogRef.close({data: this.personalInfo})
  }
}
