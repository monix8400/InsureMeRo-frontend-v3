import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {User} from "../../models/user";

@Component({
  selector: 'auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {
  user: User = new User();

  user_dropdown = [
    {label: 'Profile', routerLink: ['/profile']},
    {label: 'My Insurances', routerLink: ['/insurances']},
    {label: 'Logout', command: () => this.logout()}
  ];


  constructor(private userService: UserService, private router: Router, private authenticationService: AuthenticationService) {
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
    this.authenticationService.logout(this.user.email).subscribe(
      {
        next: () => {
          localStorage.clear();
          this.router.navigate(['/login']).then(() => console.log('Logout succeeded!'))
        },
        error: () => console.log('Logout failed!')
      })
  }
}
