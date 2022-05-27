import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss']
})
export class AccountLayoutComponent implements OnInit {

  menu = [
    {icon:"person",label: 'User Information', routerLink: ['/profile']},
    {icon:"badge",label: 'Account Information', routerLink: ['account-info']},
    {icon:"settings",label: 'Settings', routerLink: ['settings']}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
