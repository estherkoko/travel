import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isLoading: boolean = false;
  senderName: String = '';

  constructor() { }

  ngOnInit() {
  }

  onContactSubmit(contactForm: any) {
    this.isLoading = true;
    this.senderName = contactForm.value.fullname;

    emailjs.sendForm('alegna_service', 'contact_form', '#contact-form', 'user_QmgUSDLy2M8ifZ5i28u62')
      .then((response) => {
        this.isLoading = false;
        console.log('SUCCESS!', response.status, response.text);
        this.hideAlertAfterSeconds(2000);
      }, (err) => {
        this.isLoading = false;
        console.log('FAILED...', err);
      });

    contactForm.reset();
  }

  hideAlertAfterSeconds(milliseconds: number) {
    setTimeout(() => {
      this.senderName = '';
    }, milliseconds);
  }
}
