import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonConstant } from '../constants/common';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  data: any[] = [];
  posts: any[] = [];
  history: any[] = [];
  userRole = "";
  searchQuery = "";
  sortBy = "date";
  showHistory = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.userRole = localStorage.getItem("user-role") || "";

    this.httpClient.get(CommonConstant.API_URL + 'post').subscribe((data: any) => {
      this.data = data;
      this.posts = data.slice();
    });
  }

  filter() {
    this.posts = this.data.filter(post => {
      return post.title.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  sort() {
    if (this.sortBy == "date") {
      this.posts.sort((a, b) => {
        return new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime();
      });
    } else {
      this.posts.sort((a, b) => {
        return b.title > a.title ? 1 : -1;
      });
    }
  }

  getHistory(id: any) {
    this.httpClient.get(CommonConstant.API_URL + 'post/history/' + id).subscribe((data: any) => {
      this.history = data;
      this.showHistory = true;
    });
  }

}
