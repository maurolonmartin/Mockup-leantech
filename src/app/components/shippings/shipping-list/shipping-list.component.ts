import { Component, OnInit } from '@angular/core';
import { ShippingService } from 'src/app/shared/shipping.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-shipping-list',
  templateUrl: './shipping-list.component.html',
  styleUrls: ['./shipping-list.component.css']
})
export class ShippingListComponent implements OnInit {

  constructor(private service: ShippingService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['origin', 'value'];

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

}
