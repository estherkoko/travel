import {Component, OnInit} from '@angular/core';
import {AlegnaPlacesService} from '../../providers/alegna-places.service';

@Component({
    selector: 'app-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

    myPlaces: any;

    constructor(public alegnaPlaceService: AlegnaPlacesService) {
    }

    getPlacesData() {
        this.myPlaces = this.alegnaPlaceService.getPlaces();
    }

    ngOnInit() {

        this.getPlacesData();
    }

}
