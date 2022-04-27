import { Injectable } from '@angular/core';
import {HTTPRequestService} from "./http-request.service";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpRequestService: HTTPRequestService) {
  }

  addUser(user: User) {
    return this.httpRequestService.post('user/addUser', user).subscribe();
  }

  getUsers() {
    return this.httpRequestService.get('user/getUsers');
  }

  getUserById(id: number) {
    return this.httpRequestService.get('user/getUserById/' + id);
  }

  deleteUserById(id: number) {
    return this.httpRequestService.delete('user/deleteUserById/' + id).subscribe();
  }
}
