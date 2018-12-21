import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
  }

 onContactSubmit(){
   emailjs.sendForm('alegna_service', 'contact_form', 'contact-form', 'user_QmgUSDLy2M8ifZ5i28u62')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });
    //form.reset();
 }
}
