import {Injectable} from '@angular/core';
import {HTTPRequestService} from "./http-request.service";
import {User} from "../models/user";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem("accessToken")});

  constructor(private httpRequestService: HTTPRequestService) {
  }

  addUser(user: User) {
    return this.httpRequestService.post('user/addUser', user).subscribe();
  }

  getUsers() {
    return this.httpRequestService.get('user/getUsers');
  }

  deleteUserById(id: number) {
    return this.httpRequestService.delete('user/deleteUserById/' + id, null, this.headers).subscribe();
  }

  getCurrentUser() {
    return this.httpRequestService.get('user/user', null, this.headers);
  }
}
