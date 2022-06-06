import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private router: Router, private loginService: AuthenticationService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.login(this.loginForm.value);
  }

  login(user: User) {
    if (this.loginForm.valid) {
      this.loginService.login(user.email, user.password).subscribe({
        next: (data) => {
          // console.log(data)
          localStorage.setItem("accessToken", data.accessToken)
          this.snackBar.open("Login succeeded!", "close", {
            duration: 2000,
            panelClass: ['primary-snackBar']
          })
          this.router.navigate(['/auth-home']).then(r => console.log(r));
        },
        error: () => this.snackBar.open("Login failed!", "close", {
          duration: 2000,
          panelClass: ['warn-snackBar']
        })
      });
    } else {
      this.snackBar.open("Please insert valid information", "close", {
        duration: 2000,
        panelClass: ['warn-snackBar']
      })
    }
  }


  isValid() {
    return (
      !!this.loginForm.controls['email'].value &&
      !!this.loginForm.controls['password'].value
    );
  }
}
