import {Injectable} from '@angular/core';
import {HTTPRequestService} from "./http-request.service";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpRequestService: HTTPRequestService) {
  }

  addUser(user: User) {
    return this.httpRequestService.post('user/addUser', user, null, undefined, 'text');
  }

  getUsers() {
    return this.httpRequestService.get('user/getUsers');
  }

  deleteUserById(id: number) {
    return this.httpRequestService.delete('user/deleteUserById/' + id).subscribe();
  }

  getCurrentUser() {
    return this.httpRequestService.get('user/user');
  }

  updateUserFirstname(firstname: any) {
    return this.httpRequestService.post('user/updateFirstname', firstname)
  }

  updateUserLastname(lastname: any) {
    return this.httpRequestService.post('user/updateLastname', lastname)
  }

  updateUserEmail(email: any) {
    return this.httpRequestService.post('user/updateEmail', email)
  }
}
