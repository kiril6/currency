import { Component } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';




@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})




export class CurrencyListComponent  {

    // private _url= 'assets/currency.json';
  // constructor(private _http: Http) {}
  // getHerbs () {
  //   return this._http.get(this._url)
  //     .map((response: Response) => response.json());
  // }
  
   data: Object;
    constructor(private http: Http) {
      http.get('assets/currency.json')
        .map(res => res.json())
        .subscribe(data => this.data = data,
                    err => console.log(err),
                    () => console.log('file rode'));

                   
    }

//   var output;

// output.innerHtml= document.getElementsByClassName('holder');
// output.innerHtml=this.data.firstName;
}



 

//  private _url: string = "assets/currency.json";

    // constructor(private _http: Http){}
    // getEmployees(){
    //     return this._http.get(this._url)
    //         .map((response: Response) => response.json())
    //         .catch(this.errorHandler);

    // }
    //        errorHandler(error: Response){
    //     console.error(error);
    //     return Observable.throw(error || "Server Error");
    // }



