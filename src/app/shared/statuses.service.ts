import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StatusesService {

  statusesList: AngularFireList<any>;
  array = [];
  constructor(private firebase: AngularFireDatabase) {
    this.statusesList = this.firebase.list('statuses');
    this.statusesList.snapshotChanges().subscribe(
      list => {
        this.array = list.map(item => {
          return{
            $key: item.key,
            ...item.payload.val()
          };
        })
      });
   }
}
