import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  senderName: String = '';
  isLoading: boolean = false;

  constructor() { }

  sendEmail() {
    emailjs.sendForm('alegna_service', 'contact_form', '#contact-form', 'user_QmgUSDLy2M8ifZ5i28u62')
      .then((response) => {
        this.isLoading = false;
        console.log('SUCCESS!', response.status, response.text);
        this.hideAlertAfterSeconds(2000);
      }, (err) => {
        this.isLoading = false;
        console.log('FAILED...', err);
      });
  }


  hideAlertAfterSeconds(milliseconds: number) {
    setTimeout(() => {
      this.senderName = '';
    }, milliseconds);
  }
}
