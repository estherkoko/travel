import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: {
    fullname:string,
    email:  string,
    subject:string
    message:string
  };
  constructor() { }

  ngOnInit() {
  }

 
}
