import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  youngImageObject = [{
    image: 'assets/papa_young_1.jpg',
    thumbImage: 'assets/papa_young_1.jpg',
    //title: 'ABC'
}, {
    image: 'assets/papa_young_2.jpg',
    thumbImage: 'assets/papa_young_2.jpg'
}, {
    image: 'assets/papa_young_3.jpg',
    thumbImage: 'assets/papa_young_3.jpg',
    //title: 'Example with title.'
},{
  image: 'assets/papa_young_4.jpg',
  thumbImage: 'assets/papa_young_4.jpg',
  //title: 'ABC'
},{
  image: 'assets/papa_young_5.jpg',
  thumbImage: 'assets/papa_young_5.jpg',
  //title: 'ABC'
},{
  image: 'assets/papa_young_6.jpg',
  thumbImage: 'assets/papa_young_6.jpg',
  //title: 'ABC'
}];

  joiningImageObject = [{
    image: 'assets/papa_joining_1.jpg',
    thumbImage: 'assets/papa_joining_1.jpg',
    //title: 'ABC'
}, {
    image: 'assets/papa_joining_2.jpg',
    thumbImage: 'assets/papa_joining_2.jpg'
}, {
    image: 'assets/papa_joining_3.jpg',
    thumbImage: 'assets/papa_joining_3.jpg',
    //title: 'Example with title.'
}, {
  image: 'assets/papa_joining_4.jpg',
  thumbImage: 'assets/papa_joining_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/papa_joining_5.jpg',
  thumbImage: 'assets/papa_joining_5.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/papa_joining_6.jpg',
  thumbImage: 'assets/papa_joining_6.jpg',
  //title: 'Example with title.'
}];

marriageImageObject= [{
  image: 'assets/marriage_1.jpg',
  thumbImage: 'assets/marriage_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/marriage_2.jpg',
  thumbImage: 'assets/marriage_2.jpg'
}, {
  image: 'assets/marriage_3.jpg',
  thumbImage: 'assets/marriage_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/marriage_4.jpg',
  thumbImage: 'assets/marriage_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/marriage_5.jpg',
  thumbImage: 'assets/marriage_5.jpg',
  //title: 'Example with title.'
}];

suvigyaImageObject= [{
  image: 'assets/suvigya_1.jpg',
  thumbImage: 'assets/suvigya_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/suvigya_2.jpg',
  thumbImage: 'assets/suvigya_2.jpg'
}, {
  image: 'assets/suvigya_3.jpg',
  thumbImage: 'assets/suvigya_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/suvigya_4.jpg',
  thumbImage: 'assets/suvigya_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/suvigya_5.jpg',
  thumbImage: 'assets/suvigya_5.jpg',
  //title: 'Example with title.'
}];

sumitImageObject=[{
  image: 'assets/sumit_1.jpg',
  thumbImage: 'assets/sumit_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/sumit_2.jpg',
  thumbImage: 'assets/sumit_2.jpg'
}, {
  image: 'assets/sumit_3.jpg',
  thumbImage: 'assets/sumit_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/sumit_4.jpg',
  thumbImage: 'assets/sumit_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/sumit_5.jpg',
  thumbImage: 'assets/sumit_5.jpg',
  //title: 'Example with title.'
}];

suyashImageObject=[{
  image: 'assets/suyash_1.jpg',
  thumbImage: 'assets/suyash_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/suyash_2.jpg',
  thumbImage: 'assets/suyash_2.jpg'
}, {
  image: 'assets/suyash_3.jpg',
  thumbImage: 'assets/suyash_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/suyash_4.jpg',
  thumbImage: 'assets/suyash_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/suyash_5.jpg',
  thumbImage: 'assets/suyash_5.jpg',
  //title: 'Example with title.'
}];

carImageObject=[{
  image: 'assets/firstCar_1.jpg',
  thumbImage: 'assets/firstCar_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/firstCar_2.jpg',
  thumbImage: 'assets/firstCar_2.jpg'
}];

serviceImageObject=[{
  image: 'assets/service_1.jpg',
  thumbImage: 'assets/service_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/service_2.jpg',
  thumbImage: 'assets/service_2.jpg'
}, {
  image: 'assets/service_3.jpg',
  thumbImage: 'assets/service_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/service_4.jpg',
  thumbImage: 'assets/service_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/service_5.jpg',
  thumbImage: 'assets/service_5.jpg',
  //title: 'Example with title.'
}];

familyTripImageObject=[{
  image: 'assets/family_trips_1.jpg',
  thumbImage: 'assets/family_trips_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/family_trips_2.jpg',
  thumbImage: 'assets/family_trips_2.jpg'
}, {
  image: 'assets/family_trips_3.jpg',
  thumbImage: 'assets/family_trips_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/family_trips_4.jpg',
  thumbImage: 'assets/family_trips_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/family_trips_5.jpg',
  thumbImage: 'assets/family_trips_5.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/family_trips_6.jpg',
  thumbImage: 'assets/family_trips_6.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/family_trips_7.jpg',
  thumbImage: 'assets/family_trips_7.jpg',
  //title: 'Example with title.'
}];

additionsImageObject=[{
  image: 'assets/additions_1.jpg',
  thumbImage: 'assets/additions_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/additions_2.jpg',
  thumbImage: 'assets/additions_2.jpg'
}, {
  image: 'assets/additions_3.jpg',
  thumbImage: 'assets/additions_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/additions_4.jpg',
  thumbImage: 'assets/additions_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/additions_5.jpg',
  thumbImage: 'assets/additions_5.jpg',
  //title: 'Example with title.'
}];

euroTripImageObject=[{
  image: 'assets/euroTrip_1.jpg',
  thumbImage: 'assets/euroTrip_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/euroTrip_2.jpg',
  thumbImage: 'assets/euroTrip_2.jpg'
}, {
  image: 'assets/euroTrip_3.jpg',
  thumbImage: 'assets/euroTrip_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/euroTrip_4.jpg',
  thumbImage: 'assets/euroTrip_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/euroTrip_5.jpg',
  thumbImage: 'assets/euroTrip_5.jpg',
  //title: 'Example with title.'
}];

}
