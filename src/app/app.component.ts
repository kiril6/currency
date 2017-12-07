import { Component, Injectable, OnInit } from '@angular/core';
// import {DataGetService} from "./services/data.service";
import {ActivatedRoute, Router} from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as $ from 'jquery';
// import { Routes, RouterModule } from '@angular/router';
@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // providers: [DataGetService],
})



export class AppComponent implements OnInit {

  // public modalElement;
  public amount: string = '';
  public currencyFrom: string = '';
  public currencyTo: string = '';
  public outputCalculation: string = 'iznos od presmetka';

  data: Array<any>;
  constructor(private router: Router, private http: Http) {
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

  
   
  // private data;
  title = 'app';
  //  herbs = [];
  // constructor(private _CurrencyListComponent: HerbsService, private http:Http){}
  // ngOnInit() {
  //   this._CurrencyListComponent.getHerbs()
  //     .subscribe(resHerbsData => this.herbs = resHerbsData);

  //     console.log( this.getOrderSummary());


  //  data: Object;
  //   constructor(private http: Http) {
  //     http.get('assets/currency.json')
  //       .map(res => res.json())
  //       .subscribe(data => this.data = data,
  //                   err => console.log(err),
  //                   () => console.log('file rode'));

  //   }
  ngOnInit() {
    // if (window.location.href === 'http://testing.delovski.net/update'){
    //   setTimeout(()=>{
    //      this.router.navigate(['update']);
    //      console.log('vleze');
    //   },2000)
    // }
  }

  reload() {
    location.reload();
  }

  closeModal() {
    document.getElementById("myModal").classList.remove("showB");
  }

  calculateCurrency() {
    // console.log(   this.outputCalculation=this.currencyFrom + ' ' + this.amount * this.data.values[0].buy.toFixed(2) + this.currencyTo);

    // if(this.data.values['CAD'].buy.toFixed(2)) {
    //   console.log('here' + this.data.values['CAD'].buy.toFixed(2));
    // }
    // this.outputCalculation=this.currencyFrom + ' ' + amount;

    


    // console.log(this.currencyFrom);
    // console.log(this.data.values[0].buy);

    for (let i=0; i<=9; i++) {
      // console.log(this.data.values[i]);

      if(this.data.values[i].currency == this.currencyFrom){
        console.log('rabotiBuy ' + this.data.values[i].buy.toFixed(2));
      }

      if(this.data.values[i].currency == this.currencyTo){
        console.log('rabotiSell ' + this.data.values[i].sell.toFixed(2));
      }
 
    }

    console.log('iznos ' + this.amount);

    // console.log('here' + this.data.values);
  }

} 
 
    // constructor(private http:Http) {
        // this.http.get('assets/currency.json')
        //         .subscribe(res => this.data = res.json());

    //  var obj;
    //      this.getJSON().subscribe(data => obj=data, error => console.log(error));

                
    // }
    

    //   public getJSON(): Observable<any> {
    //      return this.http.get("assets/currency.json")
    //                      .map((res:any) => res.json());

    //  }

  //     herbs = [];
  // constructor(private _herbService: HerbsService){}

  // constructor(private http:Http) {
  //       this.http.get('assets/currency.json')
  //               .subscribe(res => this.data = res.json());
  //   }

  //   user = {
  //   username: "",
  //   password: ""
  // };

  // errorMessage: string;

  // constructor (private ds: DataService, private route: ActivatedRoute, private router: Router) {}

  //    login() {
  //   this.ds.doLogin(this.user).subscribe(result => {

  //     console.log('dsadsadsad');
  //     if (result.user) {
  //       let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //       localStorage.setItem("user", JSON.stringify(result.user));
  //       this.router.navigate([returnUrl]);
  //     }
  //     else {
  //       this.errorMessage = "Login failed";
  //     }

  //   });
  // }

  // ngOnInit() {
  //   // this._herbService.getHerbs()
  //   //   .subscribe(resHerbsData => this.herbs = resHerbsData);
  //     console.log(this.getJSON().firstName);

    
  // }
  	
// getOrderSummary(): Observable<any> {
//     // get users from api
//     return this.http.get('assets/currency.json')//, options)
//         .map((response: Response) => {
//             console.log("mock data" + response.json());
//             return response.json();
//         }
//     )
//     // .catch(this.handleError);
// } 
// }

//  this.http.get('assets/currency.json')
//     .map((response: Response) => {
//         console.log("mock data" + response.json());
//         return response.json();
//     }
//     )
//     .catch(this.handleError);