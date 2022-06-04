import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonConstant } from '../constants/common';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-post-builder',
  templateUrl: './post-builder.component.html',
  styleUrls: ['./post-builder.component.css']
})
export class PostBuilderComponent implements OnInit {

  post: any;


  form = { title: "", postContent: "", author: "" };
  errors = { title: "", postContent: "" };

  constructor(private httpClient: HttpClient, private _router: ActivatedRoute, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {

    this.form.author = this.authService.userName;

    let id = this._router.snapshot.params["id"];
    if (id !== undefined) {
      this.httpClient.get(CommonConstant.API_URL + 'post/' + id).subscribe((data: any) => {
        this.form = data;
      });
    }

  }


  save() {

    if (this.form.title.length === 0) {
      this.errors.title = "Title is required";
    }

    if (this.form.postContent.length === 0) {
      this.errors.postContent = "Post content is required";
    }

    if (this.errors.postContent.length === 0 && this.errors.title.length === 0) {
      this.httpClient.post(CommonConstant.API_URL + 'post', this.form).subscribe((data: any) => {
        this.post = data;

        confirm("Post saved successfully");
        this.router.navigate(['post-list'])

      });
    }


  }

  goToList() {
    this.router.navigate(['post-list']);
  }

}

