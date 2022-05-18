import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent implements OnInit {

  menu = [
    {label: 'User Information', routerLink: ['/profile']},
    {label: 'Account Information', routerLink: ['account-info']},
    {label: 'Settings', routerLink: ['settings']}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
