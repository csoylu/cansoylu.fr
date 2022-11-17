import { Component, OnInit } from '@angular/core';
import { Account } from './account.model';
import { Post } from './post.model';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {
  posts: Post[] = [];
  constructor() { }

  ngOnInit(): void {

    this.posts[0] = {
      "id": 1,
      "message": "This is a test message",
      "created_time": "2020-01-01",
      "full_picture": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      "owner": {
        "id": 1,
        "name": "Test User",
        "avatar": "https://cdn-icons-png.flaticon.com/512/147/147142.png",
        "access_token": "1234567890",
        "posts": []
      },
      "likes": 3,
      "comments": {},
    };
    this.posts[1] = {
      "id": 1,
      "message": "This is a test message",
      "created_time": "2020-01-01",
      "full_picture": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      "owner": {
        "id": 1,
        "name": "Test User",
        "avatar": "https://cdn-icons-png.flaticon.com/512/147/147142.png",
        "access_token": "1234567890",
        "posts": []
      },
      "likes": 1,
      "comments": {},
    };
    }

  likePost(post: Post) {
    console.log(post);
  }

}
