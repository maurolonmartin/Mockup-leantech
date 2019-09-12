import { Component, OnInit } from '@angular/core';
import { UserMessages } from '../models/usermessages';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public message: UserMessages;
  constructor() { 
    this.message = new UserMessages('','','','','');
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.message);
  }

}
