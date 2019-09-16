import { Component, OnInit } from '@angular/core';
import { ShippingService } from 'src/app/shared/shipping.service';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { ShippingComponent } from '../shipping/shipping.component';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-shipping-list',
  templateUrl: './shipping-list.component.html',
  styleUrls: ['./shipping-list.component.css']
})
export class ShippingListComponent implements OnInit {

  constructor(private service: ShippingService,
    private dialog: MatDialog,
    private notificationService: NotificationService) { }

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
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele =>{
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) !=1;
          });
        }
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

  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ShippingComponent, dialogConfig);
  }

  onDelete($key){
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteShipping($key);
      this.notificationService.warn('! Deleted successfully');
    }
    
  }
}
