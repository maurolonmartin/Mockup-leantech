import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private firebase: AngularFireDatabase, 
              private datePipe: DatePipe) { }

  shippingList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    date: new FormControl(''),
    origin: new FormControl('', Validators.required),
    zipOrigin: new FormControl(''),
    destination: new FormControl('', Validators.required),
    zipDestination: new FormControl(''),
    value: new FormControl('', [Validators.required, Validators.minLength(2)]),
    status: new FormControl(0),
  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      date: '',
      origin: '',
      zipOrigin: '',
      destination: '',
      zipDestination: '',
      value: '',
      status: 0,
    });
  };

  getShippings(){
    this.shippingList = this.firebase.list('shippings');
    return this.shippingList.snapshotChanges();
  };

  insertShipping(shipping){
    this.shippingList.push({
      date: shipping.date == "" ? "" : this.datePipe.transform(shipping.date, 'EEEE dd h:MM a'),
      origin: shipping.origin,
      zipOrigin: shipping.zipOrigin,
      destination: shipping.destination,
      zipDestination: shipping.zipDestination,
      value: shipping.value,
      status: shipping.status,
    });
  };

  updateShipping(shipping){
    this.shippingList.update(shipping.$key,
      {
        date: shipping.date == "" ? "" : this.datePipe.transform(shipping.date, 'EEEE dd h:MM a'),
        origin: shipping.origin,
        zipOrigin: shipping.zipOrigin,
        destination: shipping.destination,
        zipDestination: shipping.zipDestination,
        value: shipping.value,
        status: shipping.status,
      });
  };

  deleteShipping($key: string){
    this.shippingList.remove($key);
  };
}
