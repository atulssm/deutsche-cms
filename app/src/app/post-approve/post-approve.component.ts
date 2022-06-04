import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonConstant } from '../constants/common';

@Component({
  selector: 'app-post-approve',
  templateUrl: './post-approve.component.html',
  styleUrls: ['./post-approve.component.css']
})
export class PostApproveComponent implements OnInit {

  posts: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.httpClient.get(CommonConstant.API_URL + 'post/PendingForApproval').subscribe((data: any) => {
      this.posts = data;
    });
  }

  approve(id: number) {
    this.httpClient.post(CommonConstant.API_URL + 'post/ApprovePost/' + id, null).subscribe((data: any) => {
      this.load();
    });
  }

  reject(id: number) {
    this.httpClient.post(CommonConstant.API_URL + 'post/RejectPost/' + id, null).subscribe((data: any) => {
      this.load();
    });
  }

}
