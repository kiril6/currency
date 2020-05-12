import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public newDate;

  getYear(){
    const dateObj = new Date();
    return this.newDate = dateObj.getUTCFullYear();
  }

}
