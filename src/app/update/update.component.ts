import { Component, OnInit } from '@angular/core';
import { AppService, ICurrencies } from '../content/app.service';
import { Router } from '@angular/router';

import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss', '../currency-list/currency-list.component.scss']
})
export class UpdateComponent implements OnInit {
  public success: boolean;
  public modalElement;
  public newDate: string;
  //update currency
  messageCurrency: ICurrencies = {};

  public passwordInput: string = '';
  public updateCurrency: boolean = false;
  data: Array<any>;

  constructor(private appService: AppService, private router: Router, private http: Http) {


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





  //update currency
  sendCurrency(messageCurrency: ICurrencies) {
    this.appService.sendCurrency(messageCurrency).subscribe(res => {
      this.success = true;
      // alert('The form has been sent!');
      // console.log('AppComponent Success', res);
      window.alert('Uspesno Azurirano!');
      this.router.navigate(['/']);
    }, error => {
      this.success = false;
      // alert('The form was not sent!\n Please refresh and try again.');
      this.modalElement = document.getElementById('myModal');
      this.modalElement.className += " showB";
      // console.log('AppComponent Error', error);
    })
  }


  passwordInputValue(value) {
    this.passwordInput = value;


  }

  isPasswordTrue() {
    if (this.passwordInput == 'ang2805' || this.passwordInput == 'aveo100') {
      this.updateCurrency = true;
    } else {
      this.updateCurrency = false;
    }
  }

  ngOnInit() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDay();
    var dayName = dateObj.toString().split(' ')[0];
    var year = dateObj.getUTCFullYear();
    this.newDate = this.formatDateToString(dateObj);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.messageCurrency.eurBuy = this.data.values[0].buy.toFixed(2);
      this.messageCurrency.eurSell = this.data.values[0].sell.toFixed(2);
      this.messageCurrency.audBuy = this.data.values[1].buy.toFixed(2);
      this.messageCurrency.audSell = this.data.values[1].sell.toFixed(2);
      this.messageCurrency.cadBuy = this.data.values[2].buy.toFixed(2);
      this.messageCurrency.cadSell = this.data.values[2].sell.toFixed(2);
      this.messageCurrency.dkkBuy = this.data.values[3].buy.toFixed(2);
      this.messageCurrency.dkkSell = this.data.values[3].sell.toFixed(2);
      this.messageCurrency.jpyBuy = this.data.values[4].buy.toFixed(2);
      this.messageCurrency.jpySell = this.data.values[4].sell.toFixed(2);
      this.messageCurrency.nokBuy = this.data.values[5].buy.toFixed(2);
      this.messageCurrency.nokSell = this.data.values[5].sell.toFixed(2);
      this.messageCurrency.sekBuy = this.data.values[6].buy.toFixed(2);
      this.messageCurrency.sekSell = this.data.values[6].sell.toFixed(2);
      this.messageCurrency.chfBuy = this.data.values[7].buy.toFixed(2);
      this.messageCurrency.chfSell = this.data.values[7].sell.toFixed(2);
      this.messageCurrency.gbpBuy = this.data.values[8].buy.toFixed(2);
      this.messageCurrency.gbpSell = this.data.values[8].sell.toFixed(2);
      this.messageCurrency.usdBuy = this.data.values[9].buy.toFixed(2);
      this.messageCurrency.usdSell = this.data.values[9].sell.toFixed(2);
    }, 1300);
  }

  clearFields() {
    this.messageCurrency.eurBuy = '';
    this.messageCurrency.eurSell = '';
    this.messageCurrency.audBuy = '';
    this.messageCurrency.audSell = '';
    this.messageCurrency.cadBuy = '';
    this.messageCurrency.cadSell = '';
    this.messageCurrency.dkkBuy = '';
    this.messageCurrency.dkkSell = '';
    this.messageCurrency.jpyBuy = '';
    this.messageCurrency.jpySell = '';
    this.messageCurrency.nokBuy = '';
    this.messageCurrency.nokSell = '';
    this.messageCurrency.sekBuy = '';
    this.messageCurrency.sekSell = '';
    this.messageCurrency.chfBuy = '';
    this.messageCurrency.chfSell = '';
    this.messageCurrency.gbpBuy = '';
    this.messageCurrency.gbpSell = '';
    this.messageCurrency.usdBuy = '';
    this.messageCurrency.usdSell = '';
  }

  private formatDateToString(date) {
    var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    var yyyy = date.getFullYear();
    return (dd + "." + MM + "." + yyyy);
  }


}