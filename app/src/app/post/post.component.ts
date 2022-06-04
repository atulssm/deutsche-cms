import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonConstant } from '../constants/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post = { title: "", postContent: "", createdOn: "", author: "" };
  constructor(private httpClient: HttpClient, private _router: ActivatedRoute,) { }

  ngOnInit() {
    let id = this._router.snapshot.params["id"];
    this.httpClient.get(CommonConstant.API_URL + 'post/' + id).subscribe((data: any) => {
      this.post = data;
    });
  }

}
