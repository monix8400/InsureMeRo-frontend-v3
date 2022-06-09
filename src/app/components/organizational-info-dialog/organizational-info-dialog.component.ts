import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {PersonalInfoService} from "../../services/personal-info.service";

@Component({
  selector: 'app-organizational-info-dialog',
  templateUrl: './organizational-info-dialog.component.html',
  styleUrls: ['./organizational-info-dialog.component.scss']
})
export class OrganizationalInfoDialogComponent implements OnInit {
  organizationalInfoList: [] = [];
  organizationalInfo: any;

  @ViewChild('items') items!: ElementRef;

  constructor(public dialogRef: MatDialogRef<OrganizationalInfoDialogComponent>, private personalInfoService: PersonalInfoService, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.getPersonalInfoForCurrentUser()
  }

  getPersonalInfoForCurrentUser() {
    this.personalInfoService.getPersonalInfoForCurrentUser(1).subscribe((data) => {
      this.organizationalInfoList = data;
    });
  }

  onNoClick(): void {
    this.dialogRef.close({data: 'Cancel'});
  }

  onSelect(item: any, index: any) {
    this.organizationalInfo = item;

    let childElements = Array.of(this.items.nativeElement.children);
    if (this.items.nativeElement.childNodes.length > 2) {
      for (let i = 0; i <= childElements.length; i++) {
        this.renderer.removeClass(this.items.nativeElement.childNodes.item(i), "active");
      }
    }
    this.renderer.addClass(this.items.nativeElement.childNodes.item(index), "active");
  }

  onClick() {
    this.dialogRef.close({data: this.organizationalInfo})
  }
}
