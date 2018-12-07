import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AlegnaPlacesService {

  places = [
    {image: '../../assets/img/durban.jpg', name: 'Moses Mabhida Stadium', location: 'Durban'},
    {image: '../../assets/img/bokap.jpg', name: 'Bo-Kaap Museum', location: 'Cape Town'},
    {image: '../../assets/img/elephant.jpg', name: 'Elephant National Park', location: 'Addo'},
    {image: '../../assets/img/beach.jpg', name: 'Sun City', location: 'Rustenburg'}
  ];

  services = [
    {image: '../../assets/img/accommodation_arrangements.jpg', name: 'Accommodation Arrangements', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis rutrum bibendum. Duis at quam velit. Vivamus vitae porta tellus. Nam vehicula vel odio non malesuada. Nullam quis lacinia dui. Maecenas egestas quam egestas ex efficitur tristique. Aenean commodo finibus accumsan'},
    {image: '../../assets/img/flight_bookings.jpg', name: 'Flight Bookings', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis rutrum bibendum. Duis at quam velit. Vivamus vitae porta tellus. Nam vehicula vel odio non malesuada. Nullam quis lacinia dui. Maecenas egestas quam egestas ex efficitur tristique. Aenean commodo finibus accumsan'},
    {image: '../../assets/img/holiday_packages.jpg', name: 'Holiday Packages', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis rutrum bibendum. Duis at quam velit. Vivamus vitae porta tellus. Nam vehicula vel odio non malesuada. Nullam quis lacinia dui. Maecenas egestas quam egestas ex efficitur tristique. Aenean commodo finibus accumsan'}
];

  constructor() { }

  getPlaces(){
    return this.places;
  }

  getServices(){
    return this.services;
  }
}
