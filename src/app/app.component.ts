import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ShippingListComponent } from '../app/components/shippings/shipping-list/shipping-list.component';
import { ShippingService } from 'src/app/shared/shipping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'mockup-leantech';

  constructor(private service: ShippingService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['date', 'origin', 'iconTruck', 'value', 'deletebtn','actions'];
  searchKey: string;

  ngOnInit() {
    this.service.getShippings().subscribe(
      list => {
        let array = list.map(item => {
          return{
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        
      });
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    console.log("evento lanzado");
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

}