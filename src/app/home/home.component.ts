import { Component, OnInit } from '@angular/core';
import { AlegnaPlacesService } from '../../providers/alegna-places.service';
import { ContactService } from 'src/providers/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myPlaces:any;
  constructor(public alegnaPlaceService: AlegnaPlacesService, private contactService: ContactService) { }

  getPlacesData(){
    this.myPlaces=this.alegnaPlaceService.getPlaces();
  }
  ngOnInit() {

   this.getPlacesData();
  }

  onContactSubmit(contactForm: any) {
    this.contactService.isLoading = true;
    this.contactService.senderName = contactForm.value.fullname;
    this.contactService.sendEmail();
    contactForm.reset();
  }
}
