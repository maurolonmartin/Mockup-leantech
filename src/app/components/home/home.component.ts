import { Component, OnInit } from '@angular/core';
import { Guides } from '../models/guides';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public guides: Array<Guides>;

  constructor() {
    this.guides = [
      new Guides("Monday 10th 2:28 PM","New York","Chicago","any",250),
      new Guides("Monday 10th 2:28 PM","Miami","Boston","any",350),
      new Guides("Monday 10th 2:28 PM","Denver","Cincinnati","any",450)
    ];
  }

  ngOnInit() {
    console.log(this.guides);
  }

}
