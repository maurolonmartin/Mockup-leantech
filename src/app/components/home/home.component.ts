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
  
  }

  ngOnInit() {
    console.log(this.guides);
  }

  redirigir() {
    console.log("evento redirigir lanzado ");
    this._router.navigate(['/create']);
  };
}
