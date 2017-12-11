import { Component, Injectable, OnInit } from '@angular/core';
// import {DataGetService} from "./services/data.service";
import { ActivatedRoute, Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as $ from 'jquery';
// import { Routes, RouterModule } from '@angular/router';
import { DataService } from './services/data.service';
@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})

export class AppComponent implements OnInit {

  // public modalElement;
  public amount: number;
  public currencyFrom: string = '';
  public currencyTo: string = '';
  public outputCalculation;
  private fromBuyValue;
  private toSellValue;
  private formula;

  constructor(public dataService: DataService) { }

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
  }

  reload() {
    location.reload();
  }

  // turnOnSubscribtion(){
  //   console.log("activate timer");
  //   // unsubscribe here
  //   this.dataService.timer.subscribe();
  // }

  closeModalX() {
    document.getElementById("myModal").classList.remove("showB");
  }

  closeModal() {
    document.getElementById("myModal").classList.remove("showB");
    // this.turnOnSubscribtion();
  }

  fieldsChange() {
    this.turnOffSubscribtion();
  }

  turnOffSubscribtion() {
    // console.log("Destroy timer");
    // unsubscribe here
    this.dataService.sub.unsubscribe();
  }

  calculateCurrency() {
    // console.log(   this.outputCalculation=this.currencyFrom + ' ' + this.amount * this.data.values[0].buy.toFixed(2) + this.currencyTo);

    // if(this.data.values['CAD'].buy.toFixed(2)) {
    //   console.log('here' + this.data.values['CAD'].buy.toFixed(2));
    // }
    // this.outputCalculation=this.currencyFrom + ' ' + amount; 


    // console.log(this.currencyFrom);
    // console.log(this.data.values[0].buy);

    for (let i = 0; i <= 9; i++) {
      // console.log(this.data.values[i]);

      if (this.dataService.data.values[i].currency == this.currencyFrom) {
        // console.log('rabotiBuy ' + this.dataService.data.values[i].buy.toFixed(2));
        this.fromBuyValue = this.dataService.data.values[i].buy;
      } else {
        this.fromBuyValue = this.dataService.data.values[0].sell;
      }

      if (this.dataService.data.values[i].currency == this.currencyTo) {
        // console.log('rabotiSell ' + this.dataService.data.values[i].sell.toFixed(2));
        this.toSellValue = this.dataService.data.values[i].sell;
      } else {
        this.toSellValue = this.dataService.data.values[0].sell;
      }

    }

    if (this.currencyFrom === 'MKD') {
      this.formula = this.amount / this.fromBuyValue;
    } else if (this.currencyTo === 'MKD') {
      this.formula = this.amount * this.toSellValue;
    }
    else {
      this.formula = this.amount * this.fromBuyValue / this.toSellValue;
    }
    this.outputCalculation = this.amount + ' ' + this.currencyFrom + ' = ' + Math.round(this.formula * 100) / 100 + ' ' + this.currencyTo;

  }

  ngOnDestroy() {
    this.dataService.sub.unsubscribe();
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