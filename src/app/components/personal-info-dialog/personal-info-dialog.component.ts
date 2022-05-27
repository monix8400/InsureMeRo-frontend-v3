import {Component, ElementRef, OnInit, Renderer2, ViewChild,} from '@angular/core';
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

  @ViewChild('items') items!: ElementRef;

  constructor(public dialogRef: MatDialogRef<PersonalInfoDialogComponent>, private personalInfoService: PersonalInfoService, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.getPersonalInfoForCurrentUser()
  }

  getPersonalInfoForCurrentUser() {
    this.personalInfoService.getPersonalInfoForCurrentUser().subscribe((data) => {
      this.personalInfoList = data;
    });
  }

  onNoClick(): void {
    this.dialogRef.close({data: 'Cancel'});
  }

  onSelect(item: any, index: any) {
    this.personalInfo = item;

    let childElements = Array.of(this.items.nativeElement.children);
    for (let i = 0; i <= childElements.length; i++) {
      this.renderer.removeClass(this.items.nativeElement.childNodes.item(i), "active");
    }
    this.renderer.addClass(this.items.nativeElement.childNodes.item(index), "active");
  }

  onClick() {
    this.dialogRef.close({data: this.personalInfo})
  }
}
