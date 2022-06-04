import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userRole = "";
  userName = ""

  constructor() {

    let role = localStorage.getItem("user-role");
    if (role) {
      this.userRole = role;
      this.userName = localStorage.getItem("user-name") || "";
    }

  }


  refreshUserRole() {
    this.userRole = localStorage.getItem("user-role") || "";
    this.userName = localStorage.getItem("user-name") || "";
  }

  logout() {
    localStorage.removeItem("user-role");
    this.refreshUserRole();
  }

}
