/******************************************************************************
 * 
 * BTI425 – Assignment 4
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 * No part of this assignment has been copied manually or electronically from any other source 
 * (including web sites) or distributed to other students. 
 * 
 * Name: Thu Nga (Natalie) Vu   Student ID: 132165192   Date: April 10th, 2021
 * 
 * 
 * **/ 

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bti425-a3-natalie';

  onActivate(event) {
    window.scroll(0,0);
  }
}
