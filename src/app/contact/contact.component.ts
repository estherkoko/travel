import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { ContactService } from 'src/providers/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  //isLoading: boolean = false;
  //sendMail: any;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onContactSubmit(contactForm: any) {
    this.contactService.isLoading = true;
    this.contactService.senderName = contactForm.value.fullname;
    this.contactService.sendEmail();
    contactForm.reset();
  }


}
