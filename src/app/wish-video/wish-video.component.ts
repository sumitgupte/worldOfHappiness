import { Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-wish-video',
  templateUrl: './wish-video.component.html',
  styleUrls: ['./wish-video.component.scss']
})
export class WishVideoComponent implements OnInit {

  

  constructor(public dialogRef: MatDialogRef<WishVideoComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
