import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  users: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  deleteAccount() {
    let currentUserId = this.getIdFromCurrentUser()
    this.userService.deleteUserById(currentUserId)
  }

  getUsers() {
    this.userService.getUsers().subscribe((data) => this.users = data);
  }

  getIdFromCurrentUser() {
    for (let i = 0; i < this.users.length; i++) {
      if (localStorage.getItem('email') == this.users[i].email) {
        return this.users[i].id;
      }
    }
  }

}
