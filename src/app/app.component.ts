import { Component, Injectable, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
// import { Observable } from 'rxjs/Rx';

import { DataService } from './services/data.service';
@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})

export class AppComponent {

  // public modalElement;
  public amount: number;
  public currencyFrom = '';
  public currencyTo = '';
  public outputCalculation;
  private fromBuyValue;
  private toSellValue;
  private formula = 0;
  private calcMKD = 0;

  constructor(public dataService: DataService) {}

  title = 'app';
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

  reload() {
    location.reload();
  }

  // turnOnSubscribtion(){
  //   console.log("activate timer");
  //   this.dataService.sub;
  // }

  closeModal() {
    document.getElementById('myModal').classList.remove('showB');
    // this.turnOnSubscribtion();
  }

  fieldsChange() {
    this.turnOffSubscribtion();
  }

  turnOffSubscribtion() {
    this.dataService.sub.unsubscribe();
  }

  calculateCurrency() {
    // console.log(   this.outputCalculation=this.currencyFrom + ' ' + this.amount * this.data.values[0].buy.toFixed(2) + this.currencyTo);
    // if(this.data.values['CAD'].buy.toFixed(2)) {
    //   console.log('here' + this.data.values['CAD'].buy.toFixed(2));
    // }
    // this.outputCalculation=this.currencyFrom + ' ' + amount;

    for (let i = 0; i < 34; i++) {
      if (this.dataService.data.values[i].currency === this.currencyFrom) {
        this.fromBuyValue = this.dataService.data.values[i].buy;
      } else if (this.currencyFrom === 'MKD') {
        if (this.dataService.data.values[i].currency === this.currencyTo) {
          this.toSellValue = this.dataService.data.values[i].sell;
        }
        this.calcMKD = this.amount / this.toSellValue;
        this.outputCalculation = this.amount + ' ' + this.currencyFrom + ' = ' + this.calcMKD.toFixed(2) + ' ' + this.currencyTo;
      }
      // other operation
      if (this.dataService.data.values[i].currency === this.currencyTo) {
        this.toSellValue = this.dataService.data.values[i].sell;
      } else if (this.currencyTo === 'MKD') {
        if (this.dataService.data.values[i].currency === this.currencyFrom) {
          this.fromBuyValue = this.dataService.data.values[i].buy;
        }
        this.calcMKD = this.amount * this.fromBuyValue;
        this.outputCalculation = this.amount + ' ' + this.currencyFrom + ' = ' + this.calcMKD.toFixed(2) + ' ' + this.currencyTo;
      }
      if ((this.currencyFrom !== 'MKD') && (this.currencyTo !== 'MKD')) {
        this.formula = this.amount * this.fromBuyValue / this.toSellValue;
        this.outputCalculation = this.amount + ' ' + this.currencyFrom + ' = ' + this.formula.toFixed(2) + ' ' + this.currencyTo;
      }
    }

    // if ((this.currencyFrom === 'MKD') && (this.currencyTo !== 'MKD')) {
    //   this.fromBuyValueForMKD = this.dataService.data.values[0].sell;
    //   this.formula = this.amount / this.fromBuyValueForMKD * this.toSellValue;
    //   this.calcMKD = this.formula / this.toSellValue;
      // if ((this.currencyTo !== 'MKD') && (this.currencyTo !== 'EUR')) {
      //   this.calcMKD = this.formula / this.dataService.data.values[0].buy;
      // }
    //   this.outputCalculation = this.amount + ' ' + this.currencyFrom + ' = ' + this.calcMKD.toFixed(2) + ' ' + this.currencyTo;
    // }
    // else if ((this.currencyFrom !== 'MKD') ) {
    //   // this.toSellValueForMKD = this.dataService.data.values[0].buy;
    //   this.formula = this.amount * this.fromBuyValue;
    //   this.calcMKD = this.formula;
      // if ((this.currencyFrom !== 'MKD') && (this.currencyTo !== 'EUR')) {
      //   this.calcMKD = this.formula * this.dataService.data.values[0].buy;
      // }
    //   this.outputCalculation = this.amount + ' ' + this.currencyFrom + ' = ' + this.calcMKD + ' ' + this.currencyTo;
    // }
    // else {
    //   this.formula = this.amount * this.fromBuyValue / this.toSellValue;
    //   this.outputCalculation = this.amount + ' ' + this.currencyFrom + ' = ' + this.formula.toFixed(2) + ' ' + this.currencyTo;
    // // }
    // if (this.currencyFrom === 'MKD') {
    //   this.formula = this.amount / this.fromBuyValue;
    // } else if (this.currencyTo === 'MKD') {
    //   this.formula = this.amount * this.toSellValue;
    // }
    // else {
    // }
  }

  refreshCalc() {
    this.amount = null;
    this.currencyFrom = '';
    this.currencyTo = '';
    this.outputCalculation = '';
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
  // constructor(private _herbService: HerbsService){}

  // constructor(private http:Http) {
  //       this.http.get('assets/currency.json')
  //               .subscribe(res => this.data = res.json());
  //   }

  // constructor (private ds: DataService, private route: ActivatedRoute, private router: Router) {}

  //    login() {
  //   this.ds.doLogin(this.user).subscribe(result => {
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
