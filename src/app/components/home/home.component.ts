import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  private _router: Router;

  constructor() {
  
  }

  ngOnInit() {
  }

  redirigir() {
    console.log("evento redirigir lanzado ");
    this._router.navigate(['/create']);
  };
}
