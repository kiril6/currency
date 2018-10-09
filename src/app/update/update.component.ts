import { Component, OnInit } from '@angular/core';
import { AppService, ICurrencies } from '../content/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { DataService } from '../services/data.service';
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
  public checkedStatus: boolean = true;

  constructor(private appService: AppService, private router: Router, private http: Http, public dataService: DataService) { }

  //update currency
  sendCurrency(messageCurrency: ICurrencies) {
    this.appService.sendCurrency(messageCurrency).subscribe(res => {
      this.success = true;
      // alert('The form has been sent!');
      // console.log('AppComponent Success', res);
      window.alert('Uspesno Azurirano!');
      // this.router.navigate(['/']);
      location.href = "http://intercoop.delovski.net";
    }, error => {
      this.success = false;
      // alert('The form was not sent!\n Please refresh and try again.');
      this.modalElement = document.getElementById('myModal');
      this.modalElement.className += " showB infoPopUp";
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
      this.messageCurrency.eurBuy = this.dataService.data.values[0].buy.toFixed(4);
      this.messageCurrency.eurSell = this.dataService.data.values[0].sell.toFixed(4);
      this.messageCurrency.audBuy = this.dataService.data.values[1].buy.toFixed(4);
      this.messageCurrency.audSell = this.dataService.data.values[1].sell.toFixed(4);
      this.messageCurrency.cadBuy = this.dataService.data.values[2].buy.toFixed(4);
      this.messageCurrency.cadSell = this.dataService.data.values[2].sell.toFixed(4);
      this.messageCurrency.dkkBuy = this.dataService.data.values[3].buy.toFixed(4);
      this.messageCurrency.dkkSell = this.dataService.data.values[3].sell.toFixed(4);
      this.messageCurrency.jpyBuy = this.dataService.data.values[4].buy.toFixed(4);
      this.messageCurrency.jpySell = this.dataService.data.values[4].sell.toFixed(4);
      this.messageCurrency.nokBuy = this.dataService.data.values[5].buy.toFixed(4);
      this.messageCurrency.nokSell = this.dataService.data.values[5].sell.toFixed(4);
      this.messageCurrency.sekBuy = this.dataService.data.values[6].buy.toFixed(4);
      this.messageCurrency.sekSell = this.dataService.data.values[6].sell.toFixed(4);
      this.messageCurrency.chfBuy = this.dataService.data.values[7].buy.toFixed(4);
      this.messageCurrency.chfSell = this.dataService.data.values[7].sell.toFixed(4);
      this.messageCurrency.gbpBuy = this.dataService.data.values[8].buy.toFixed(4);
      this.messageCurrency.gbpSell = this.dataService.data.values[8].sell.toFixed(4);
      this.messageCurrency.usdBuy = this.dataService.data.values[9].buy.toFixed(4);
      this.messageCurrency.usdSell = this.dataService.data.values[9].sell.toFixed(4);

      this.messageCurrency.eurStatus = this.dataService.data.values[0].checked
      this.messageCurrency.audStatus = this.dataService.data.values[1].checked
      this.messageCurrency.cadStatus = this.dataService.data.values[2].checked
      this.messageCurrency.dkkStatus = this.dataService.data.values[3].checked
      this.messageCurrency.jpyStatus = this.dataService.data.values[4].checked
      this.messageCurrency.nokStatus = this.dataService.data.values[5].checked
      this.messageCurrency.sekStatus = this.dataService.data.values[6].checked
      this.messageCurrency.chfStatus = this.dataService.data.values[7].checked
      this.messageCurrency.gbpStatus = this.dataService.data.values[8].checked
      this.messageCurrency.usdStatus = this.dataService.data.values[9].checked

    }, 3300);
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

  checkAll() {
    this.checkedStatus = this.checkedStatus != true;

    this.messageCurrency.eurStatus = this.checkedStatus
    this.messageCurrency.audStatus = this.checkedStatus
    this.messageCurrency.cadStatus = this.checkedStatus
    this.messageCurrency.dkkStatus = this.checkedStatus
    this.messageCurrency.jpyStatus = this.checkedStatus
    this.messageCurrency.nokStatus = this.checkedStatus
    this.messageCurrency.sekStatus = this.checkedStatus
    this.messageCurrency.chfStatus = this.checkedStatus
    this.messageCurrency.gbpStatus = this.checkedStatus
    this.messageCurrency.usdStatus = this.checkedStatus

  }

  private formatDateToString(date) {
    var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    var yyyy = date.getFullYear();
    return (dd + "." + MM + "." + yyyy);
  }

}