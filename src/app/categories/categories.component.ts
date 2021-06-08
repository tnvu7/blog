import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  constructor(private postsrv : PostService) { }
  categories: Array<any>;
  
  ngOnInit(): void {
    this.postsrv.getCategories().subscribe(data => this.categories = data);
  }

}