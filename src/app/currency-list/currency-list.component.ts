import { Component } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})

export class CurrencyListComponent {
  // private _url= 'assets/currency.json';
  // method () {
  //   return this._http.get(this._url)
  //     .map((response: Response) => response.json());
  // }

  public d = new Date();
  public newDate: string;
  public same = false;

  ngOnInit() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDay();
    var year = dateObj.getUTCFullYear();
    this.newDate = this.formatDateToString(dateObj);

    setTimeout(() => {
      if (this.data['datum'] === this.newDate) {
        this.same = true;
      }
      else {
        this.same = false;
      }
    }, 1300);
  }

  print() {
    window.print();
  }

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
  
  data: Array<any>;
  constructor(private http: Http) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    http.get('assets/currency.json', { headers: headers })
      .map(response => response.json()).catch(this.errorHandler)
      .subscribe(data => this.data = data,
      err => console.log(err + ' currency file not found') == window.alert('Currency file not found!'),
      () => console.log(''));
  }
  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }
}