import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { WishVideoComponent } from '../wish-video/wish-video.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  imageObject = [{
    image: 'assets/papa_mainSlide_5.jpg',
    thumbImage: 'assets/papa_mainSlide_5.jpg',
    //title: 'ABC'
}, {
    image: 'assets/papa_mainSlide_2.jpg',
    thumbImage: 'assets/papa_mainSlide_2.jpg'
}, {
    image: 'assets/papa_mainSlide_3.jpg',
    thumbImage: 'assets/papa_mainSlide_3.jpg',
    //title: 'Example with title.'
},{
    image: 'assets/papa_mainSlide_4.jpg',
    thumbImage: 'assets/papa_mainSlide_4.jpg',
    //title: 'Hummingbirds are amazing creatures'
}, {
    image: 'assets/papa_mainSlide_1.jpg',
    thumbImage: 'assets/papa_mainSlide_1.jpg'
}, {
    image: 'assets/papa_mainSlide_6.jpg',
    thumbImage: 'assets/papa_mainSlide_6.jpg',
    //title: 'Example two with title.'
}];

openDialog() {
    const dialogRef = this.dialog.open(WishVideoComponent, {
        height: '400px',
        width: '600px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

   
  }


}
