import { Component, OnInit } from '@angular/core';
import {PersonalInfoService} from "../../services/personal-info.service";

@Component({
  selector: 'display-pi-i',
  templateUrl: './display-pi-i.component.html',
  styleUrls: ['./display-pi-i.component.scss']
})
export class DisplayPiIComponent implements OnInit {
  personalInfoList: [] = [];

  constructor( private personalInfoService: PersonalInfoService,) { }

  ngOnInit(): void {
    this.getPersonalInfoForCurrentUser()
  }

  getPersonalInfoForCurrentUser() {
    this.personalInfoService.getPersonalInfoForCurrentUser(0).subscribe((data) => {
      this.personalInfoList = data;
      console.log(data)
    });
  }
}
