import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonConstant } from '../constants/common';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  error = false;
  form = { username: "", password: "" };
  constructor(private httpClient: HttpClient, private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }


  login() {
    this.httpClient.post(CommonConstant.API_URL + 'login', this.form).subscribe((data: any) => {
      if (data.success) {

        localStorage.setItem("user-role", data.role);
        localStorage.setItem("user-name", data.name);
        
        this.authService.refreshUserRole();
        document.location = "/post-list";
        //this.router.navigate(['post-list'])

      } else {

        this.error = true;

      }

    });

  }
}
