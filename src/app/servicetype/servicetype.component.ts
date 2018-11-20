import { Component, OnInit } from '@angular/core';
import { AlegnaPlacesService } from '../../providers/alegna-places.service'


@Component({
  selector: 'app-servicetype',
  templateUrl: './servicetype.component.html',
  styleUrls: ['./servicetype.component.scss']
})
export class ServicetypeComponent implements OnInit {

  serviceType: any;
  constructor(public alegnaPlacesService: AlegnaPlacesService) { }

  getServicetType(){
    this.serviceType= this.alegnaPlacesService.getServices();
  }
  ngOnInit() {

    return this.getServicetType();
  }

}
