import { EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  @Input() page : number;
  @Output() newPage : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onPrevSelect() {
    if (this.page > 1){
      this.newPage.emit(this.page - 1);
    }
  }
  onLastSelect() {
    this.newPage.emit(this.page + 1);
  }
}
