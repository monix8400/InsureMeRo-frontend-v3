import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User = new User();

  registerForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
      ]),
      lastname: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
      ]),
    }
  );

  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {

    if (this.registerForm.valid) {
      if (this.registerForm.controls['password'].value == this.registerForm.controls['confirmPassword'].value) {
        console.log(this.registerForm.value)
        this.user.firstname = this.registerForm.value['firstname']
        this.user.lastname = this.registerForm.value['lastname']
        this.user.email = this.registerForm.value['email']
        this.user.password = this.registerForm.value['password']
        this.userService.addUser(this.user).subscribe(
          {
            next: (v) => {
              this.snackBar.open(v, "close", {
                duration: 2000,
                panelClass: ['primary-snackBar']
              })
              this.router.navigateByUrl('/login').then(r => console.log(r))
            },
            error: (e) => {
              this.snackBar.open(e.error, "close", {
                duration: 2000,
                panelClass: ['warn-snackBar']
              })
            }
          });
      } else {
        this.snackBar.open("Password doesn't match!", "close", {
          duration: 2000,
          panelClass: ['warn-snackBar']
        })
      }
    } else {
      this.snackBar.open("Please complete the form.", "close", {
        duration: 2000,
        panelClass: ['warn-snackBar']
      })
    }
  }

  isValid() {
    return !!this.registerForm.controls['firstname'].value &&
      !!this.registerForm.controls['lastname'].value &&
      !!this.registerForm.controls['email'].value &&
      !!this.registerForm.controls['password'].value &&
      !!this.registerForm.controls['confirmPassword'].value;
  }
}

