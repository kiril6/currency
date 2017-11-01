import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  thumbnail?: any; //image src for the thumbnail
  image?: any; //image src for the image 
  text?: string; //optional text to show for the image
  [propName: string]: any;

  constructor() { }

  // closeModal() {
  //   document.getElementById("myModal").classList.remove("show");
  // }

  ngOnInit() {
    // this.closeModal();
  }

}
