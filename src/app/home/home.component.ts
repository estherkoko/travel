import { Component, OnInit } from '@angular/core';
import { AlegnaPlacesService } from '../../providers/alegna-places.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myPlaces:any;
  constructor(public alegnaPlaceService: AlegnaPlacesService) { }

  getPlacesData(){
    this.myPlaces=this.alegnaPlaceService.getPlaces();
  }
  ngOnInit() {

   this.getPlacesData();
  }

}
