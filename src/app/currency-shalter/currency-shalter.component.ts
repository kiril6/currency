import { Component } from '@angular/core';

import { DataService } from '../services/data.service';
@Component({
  selector: 'app-currency-shalter',
  templateUrl: './currency-shalter.component.html',
  styleUrls: ['./currency-shalter.component.scss']
})

export class CurrencyShalterComponent {
  public newDate: string;
  public same = false;
  public isSunday = false;
  public modalElement;
  public moreExpanded = false;
  public print = () => window.print();

  constructor(public dataService: DataService) { }

  ngOnInit() {
    const dateObj = new Date(),
      dayName = dateObj.toString().split(' ')[0];
    this.newDate = this.formatDateToString(dateObj);

    setTimeout(() => {
      if (this.dataService.data['datum'] === this.newDate) {
        this.same = true;
      } else {
        this.same = false;
        if (dayName === 'Sun') {
          this.isSunday = true;
        }
      }
    }, 3000);
  }

  calculator() {
    this.modalElement = document.getElementById('myModal');
    this.modalElement.className += ' showB calculator';
    // this.turnOffSubscribtion();
  }

  seeMore() {
    this.moreExpanded = this.moreExpanded !== true;
  }

  // turnOffSubscribtion(){
  //   console.log("Destroy timer");
  //   // unsubscribe here
  //   this.dataService.sub.unsubscribe();
  // }

  private formatDateToString(date) {
    // 01, 02, 03, ... 29, 30, 31
    const dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    // 01, 02, 03, ... 10, 11, 12
    const MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    // 1970, 1971, ... 2015, 2016, ...
    const yyyy = date.getFullYear();
    // create the format you want
    return (dd + '.' + MM + '.' + yyyy);
  }
}
