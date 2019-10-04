import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ShippingListComponent } from '../app/components/shippings/shipping-list/shipping-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mockup-leantech';
  searchKey: string;

  constructor(private service: ShippingListComponent) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['date', 'origin', 'iconTruck', 'value', 'deletebtn','actions'];
  

  ngOnInit() {
   
  }

  applyFilter(){
    this.service.applyFilter();
    alert("evento lanzado");
  }

}