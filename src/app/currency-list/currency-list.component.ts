import { Component } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})

export class CurrencyListComponent {
  public d = new Date();
  public newDate: string;
  public same = false;
  public isSunday = false;
  public modalElement;
  public moreExpanded: boolean = false;
  public print =() => window.print();

  constructor(public dataService: DataService) { }

  ngOnInit() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDay();
    var dayName = dateObj.toString().split(' ')[0];
    var year = dateObj.getUTCFullYear();
    this.newDate = this.formatDateToString(dateObj);

    setTimeout(() => {
      if (this.dataService.data['datum'] === this.newDate) {
        this.same = true;
      }
      else {
        this.same = false;
        if (dayName == 'Sun') {
          this.isSunday = true;
        }
      }
    }, 3000);
  }

  calculator() {
    this.modalElement = document.getElementById('myModal');
    this.modalElement.className += " showB calculator";
    // this.turnOffSubscribtion();
  }

  seeMore() {
    this.moreExpanded = this.moreExpanded != true;
  }

  // turnOffSubscribtion(){
  //   console.log("Destroy timer");
  //   // unsubscribe here
  //   this.dataService.sub.unsubscribe();
  // }

  private formatDateToString(date) {
    // 01, 02, 03, ... 29, 30, 31
    var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    // 01, 02, 03, ... 10, 11, 12
    var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    // 1970, 1971, ... 2015, 2016, ...
    var yyyy = date.getFullYear();
    // create the format you want
    return (dd + "." + MM + "." + yyyy);
  }
}