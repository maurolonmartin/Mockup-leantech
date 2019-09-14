import { Component, OnInit } from '@angular/core';
import { Guides } from '../models/guides';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public guides: Array<Guides>;
  private _router: Router;

  constructor() {
    
    this.guides = [
      new Guides("Monday 10th 2:28 PM","Houston, TX","33619","Atlanta, GA","30123",250, "123456", "Delivered"),
      new Guides("Monday 10th 2:28 PM","Houston, TX","33619","Atlanta, GA","30123",350, "654789", "In Transit"),
      new Guides("Monday 10th 2:28 PM","Houston, TX","33619","Atlanta, GA","30123",450, "987456", "Delivered")
    ];
  }

  ngOnInit() {
    console.log(this.guides);
  }

  redirigir() {
    console.log("evento redirigir lanzado ");
    this._router.navigate(['/create']);
  };
}
