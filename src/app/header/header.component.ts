import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {

   }


   lngChange() {
    window.alert('Macedonian language\n will be available soon.');
  }

  ngOnInit() {
  }

}
