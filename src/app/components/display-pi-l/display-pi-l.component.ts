import {Component, OnInit} from '@angular/core';
import {PersonalInfoService} from "../../services/personal-info.service";

@Component({
  selector: 'display-pi-l',
  templateUrl: './display-pi-l.component.html',
  styleUrls: ['./display-pi-l.component.scss']
})
export class DisplayPiLComponent implements OnInit {
  personalInfoList: [] = [];

  constructor(private personalInfoService: PersonalInfoService,) {
  }

  ngOnInit(): void {
    this.getPersonalInfoForCurrentUser()
  }

  getPersonalInfoForCurrentUser() {
    this.personalInfoService.getPersonalInfoForCurrentUser(1).subscribe((data) => {
      this.personalInfoList = data;
    });
  }
}
