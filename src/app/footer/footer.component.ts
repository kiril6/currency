import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  public newDate;

  ngOnInit() {

  }

  getYear(){
    const dateObj = new Date();
    const year = dateObj.getUTCFullYear();   
    return this.newDate = year;
  }

}
