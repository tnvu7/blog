import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import {PostService} from "../post.service";
@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  
  constructor(private postsrv : PostService) { }
  posts : Array<BlogPost>;
  ngOnInit(): void {
    this.postsrv.getPosts(1, null, null).subscribe(results => this.posts = results.slice(0,3)); 
  }

}
