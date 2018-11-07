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
  // update currency
  messageCurrency: ICurrencies = {};

  public passwordInput = '';
  public updateCurrency = false;
  public checkedStatus = true;

  public currencyBuy = ['eurBuy', 'audBuy', 'cadBuy', 'dkkBuy', 'jpyBuy', 'nokBuy', 'sekBuy', 'chfBuy', 'gbpBuy', 'usdBuy' ];
  public currencySell = ['eurSell', 'audSell', 'cadSell', 'dkkSell', 'jpySell', 'nokSell', 'sekSell', 'chfSell', 'gbpSell', 'usdSell' ];
  public currencyStatus = ['eurStatus', 'audStatus', 'cadStatus', 'dkkStatus', 'jpyStatus', 'nokStatus', 'sekStatus', 'chfStatus', 'gbpStatus', 'usdStatus' ];


  constructor(private appService: AppService, private router: Router, private http: Http, public dataService: DataService) { }

  // update currency
  sendCurrency(messageCurrency: ICurrencies) {
    this.appService.sendCurrency(messageCurrency).subscribe(res => {
      this.success = true;
      // console.log('AppComponent Success', res);
      alert('Uspesno Azurirano!');
      // this.router.navigate(['/']);
      location.href = 'http://intercoop.delovski.net';
    }, error => {
      this.success = false;
      this.modalElement = document.getElementById('myModal');
      this.modalElement.className += ' showB infoPopUp';
      // console.log('AppComponent Error', error);
    });
  }

  passwordInputValue(value) {
    this.passwordInput = value;
  }

  isPasswordTrue() {
    if (this.passwordInput === 'ang2805' || this.passwordInput === 'aveo100') {
      this.updateCurrency = true;
    } else {
      this.updateCurrency = false;
    }
  }

  ngOnInit() {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDay();
    const dayName = dateObj.toString().split(' ')[0];
    const year = dateObj.getUTCFullYear();
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

      this.messageCurrency.eurStatus = this.dataService.data.values[0].checked;
      this.messageCurrency.audStatus = this.dataService.data.values[1].checked;
      this.messageCurrency.cadStatus = this.dataService.data.values[2].checked;
      this.messageCurrency.dkkStatus = this.dataService.data.values[3].checked;
      this.messageCurrency.jpyStatus = this.dataService.data.values[4].checked;
      this.messageCurrency.nokStatus = this.dataService.data.values[5].checked;
      this.messageCurrency.sekStatus = this.dataService.data.values[6].checked;
      this.messageCurrency.chfStatus = this.dataService.data.values[7].checked;
      this.messageCurrency.gbpStatus = this.dataService.data.values[8].checked;
      this.messageCurrency.usdStatus = this.dataService.data.values[9].checked;

    }, 3300);
  }

  getValues(dataType1, dataType2, dataType3) {
    if (dataType1 === 'status') {
      for (let i = 0; i <= this.currencyStatus.length; i++) { 
        this.messageCurrency[this.currencyStatus[i]] = this.checkedStatus;
      }
    }
    if (dataType2 === 'buy') {
        for (let i = 0; i <= this.currencyBuy.length; i++) { 
          this.messageCurrency[this.currencyBuy[i]] = '';
        }
    }
    if (dataType3 === 'sell') {
        for (let i = 0; i <= this.currencySell.length; i++) { 
          this.messageCurrency[this.currencySell[i]] = '';
        }
    }
  }

  clearFields() {
    this.getValues('', 'buy', 'sell');
  }

  checkAll() {
    this.checkedStatus = this.checkedStatus !== true;
    this.getValues('status', '', '');
  }

  private formatDateToString(date) {
    const dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    const yyyy = date.getFullYear();
    return (dd + '.' + MM + '.' + yyyy);
  }

}
