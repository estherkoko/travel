import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AlegnaPlacesService {

  constructor() { }

  getPlaces(){

    //declare an array of images
    let places = [
      {image: '../../assets/img/durban.jpg', name: 'Moses Mabhida Stadium', location: 'Durban'},
      {image: '../../assets/img/bokap.jpg', name: 'Bo-Kaap Museum', location: 'Cape Town'},
      {image: '../../assets/img/elephant.jpg', name: 'Elephant National Park', location: 'Addo'},
      {image: '../../assets/img/cave.jpg', name: 'Cradle of Humankind', location: 'Johannesburg'}
    ];
 
    return places;
  }
}
