import { Component, Input, OnInit, Query } from '@angular/core';
import { PostService } from "../post.service";
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  querySub : any;
  post : BlogPost;
  constructor(private postsrv: PostService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
        this.postsrv.getPostbyId(params['id']).subscribe(post => this.post = post);
    })
  }
  ngOnDestroy() {
    if(this.querySub) this.querySub.unsubscribe();
  }
}
