import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ShippingService } from '../../../shared/shipping.service';
import { StatusesService } from '../../../shared/statuses.service';
import { NotificationService } from '../../../shared/notification.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private service: ShippingService,
    private statusesService: StatusesService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<ShippingComponent>) { }

  ngOnInit() {
    this.service.getShippings();
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit(){
    if(this.service.form.valid){
      this.service.insertShipping(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted succesfully');
      this.onClose();
    }
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
