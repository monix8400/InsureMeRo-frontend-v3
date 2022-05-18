import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  user: User = new User();

  user_dropdown = [
    {label: 'Profile', routerLink: ['/profile']},
    {label: 'My Insurances', routerLink: ['/insurances']},
    {label: 'Logout', command: () => this.logout()}
  ];


  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCurrentUser()
  }

  onClick(item: any) {
    if (item.command) {
      item.command()
    } else {
      this.router.navigate(item.routerLink)
    }
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe((data) => {
      this.user = data;
    });
  }

  getInitials() {
    return this.user.firstname.charAt(0).toUpperCase() + this.user.lastname.charAt(0).toUpperCase();
  }

  getUserName() {
    return this.user.firstname + " " + this.user.lastname;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']).then(() => console.log('Logout succeeded!'))
  }
}
