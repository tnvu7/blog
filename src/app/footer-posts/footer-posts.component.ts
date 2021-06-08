import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {

  constructor(private postsrv : PostService) { }
  posts : Array<BlogPost>;
  ngOnInit(): void {
    this.postsrv.getPosts(1, null, null).subscribe(results => this.posts = results.slice(0,3)); 
  }

}
