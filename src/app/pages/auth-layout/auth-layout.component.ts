import { Component, OnInit } from '@angular/core';
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

  user_dropdown=[
    {label: 'Profile', routerLink: ['/profile']},
    {label: 'My Insurances', routerLink: ['/insurances']},
    {label: 'Logout', command: () => this.logout()}
  ];


  constructor(private userService: UserService, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onClick(item:any){
    if(item.command){
      item.command()
    }
    else{
      this.router.navigate(item.routerLink)
    }
  }

  getUser() {
    this.userService.getUsers().subscribe((data) => {
      this.user = data;
    });
  }

  getInitials(){
    // @ts-ignore
    return localStorage.getItem("firstname").charAt(0).toUpperCase() + localStorage.getItem("lastname").charAt(0).toUpperCase();
  }

  getUserName() {
    return localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
  }

  logout() {
    let email = localStorage.getItem("email")
    if (email != null)
      this.authenticationService.logout(email).subscribe(
        {
          next: () => {
            localStorage.removeItem('firstname');
            localStorage.removeItem('lastname');
            localStorage.removeItem('email');
            this.router.navigate(['/login']).then(r => console.log(r))
            console.log('Logout succeeded!')
          },
          error: () => console.log('Logout failed!')
        })
  }
}
