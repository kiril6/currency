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

  public currencyBuy = ['eurBuy', 'audBuy', 'cadBuy', 'dkkBuy', 'jpyBuy', 'nokBuy', 'sekBuy', 'chfBuy', 'gbpBuy', 'usdBuy', 'bgnBuy', 'rsdBuy', 'allBuy', 'czkBuy', 'hufBuy', 'plnBuy', 'ronBuy', 'hrkBuy', 'tryBuy', 'rubBuy', 'brlBuy', 'cnyBuy', 'hkdBuy', 'idrBuy', 'ilsBuy', 'inrBuy', 'krwBuy', 'mxnBuy', 'myrBuy', 'nzdBuy', 'phpBuy', 'sgdBuy', 'thbBuy', 'zarBuy'];
  public currencySell = ['eurSell', 'audSell', 'cadSell', 'dkkSell', 'jpySell', 'nokSell', 'sekSell', 'chfSell', 'gbpSell', 'usdSell', 'bgnSell', 'rsdSell', 'allSell', 'czkSell', 'hufSell', 'plnSell', 'ronSell', 'hrkSell', 'trySell', 'rubSell', 'brlSell', 'cnySell', 'hkdSell', 'idrSell', 'ilsSell', 'inrSell', 'krwSell', 'mxnSell', 'myrSell', 'nzdSell', 'phpSell', 'sgdSell', 'thbSell', 'zarSell'];
  public currencyStatus = ['eurStatus', 'audStatus', 'cadStatus', 'dkkStatus', 'jpyStatus', 'nokStatus', 'sekStatus', 'chfStatus', 'gbpStatus', 'usdStatus', 'bgnStatus', 'rsdStatus', 'allStatus', 'czkStatus', 'hufStatus', 'plnStatus', 'ronStatus', 'hrkStatus', 'tryStatus', 'rubStatus', 'brlStatus', 'cnyStatus', 'hkdStatus', 'idrStatus', 'ilsStatus', 'inrStatus', 'krwStatus', 'mxnStatus', 'myrStatus', 'nzdStatus', 'phpStatus', 'sgdStatus', 'thbStatus', 'zarStatus'];



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
      this.messageCurrency.bgnBuy = this.dataService.data.values[10].buy.toFixed(4);
      this.messageCurrency.bgnSell = this.dataService.data.values[10].sell.toFixed(4);
      this.messageCurrency.rsdBuy = this.dataService.data.values[11].buy.toFixed(4);
      this.messageCurrency.rsdSell = this.dataService.data.values[11].sell.toFixed(4);
      this.messageCurrency.allBuy = this.dataService.data.values[12].buy.toFixed(4);
      this.messageCurrency.allSell = this.dataService.data.values[12].sell.toFixed(4);
      this.messageCurrency.czkBuy = this.dataService.data.values[13].buy.toFixed(4);
      this.messageCurrency.czkSell = this.dataService.data.values[13].sell.toFixed(4);
      this.messageCurrency.hufBuy = this.dataService.data.values[14].buy.toFixed(4);
      this.messageCurrency.hufSell = this.dataService.data.values[14].sell.toFixed(4);
      this.messageCurrency.plnBuy = this.dataService.data.values[15].buy.toFixed(4);
      this.messageCurrency.plnSell = this.dataService.data.values[15].sell.toFixed(4);
      this.messageCurrency.ronBuy = this.dataService.data.values[16].buy.toFixed(4);
      this.messageCurrency.ronSell = this.dataService.data.values[16].sell.toFixed(4);
      this.messageCurrency.hrkBuy = this.dataService.data.values[17].buy.toFixed(4);
      this.messageCurrency.hrkSell = this.dataService.data.values[17].sell.toFixed(4);
      this.messageCurrency.tryBuy = this.dataService.data.values[18].buy.toFixed(4);
      this.messageCurrency.trySell = this.dataService.data.values[18].sell.toFixed(4);
      this.messageCurrency.rubBuy = this.dataService.data.values[19].buy.toFixed(4);
      this.messageCurrency.rubSell = this.dataService.data.values[19].sell.toFixed(4);
      this.messageCurrency.brlBuy = this.dataService.data.values[20].buy.toFixed(4);
      this.messageCurrency.brlSell = this.dataService.data.values[20].sell.toFixed(4);
      this.messageCurrency.cnyBuy = this.dataService.data.values[21].buy.toFixed(4);
      this.messageCurrency.cnySell = this.dataService.data.values[21].sell.toFixed(4);
      this.messageCurrency.hkdBuy = this.dataService.data.values[22].buy.toFixed(4);
      this.messageCurrency.hkdSell = this.dataService.data.values[22].sell.toFixed(4);
      this.messageCurrency.idrBuy = this.dataService.data.values[23].buy.toFixed(4);
      this.messageCurrency.idrSell = this.dataService.data.values[23].sell.toFixed(4);
      this.messageCurrency.ilsBuy = this.dataService.data.values[24].buy.toFixed(4);
      this.messageCurrency.ilsSell = this.dataService.data.values[24].sell.toFixed(4);
      this.messageCurrency.inrBuy = this.dataService.data.values[25].buy.toFixed(4);
      this.messageCurrency.inrSell = this.dataService.data.values[25].sell.toFixed(4);
      this.messageCurrency.krwBuy = this.dataService.data.values[26].buy.toFixed(4);
      this.messageCurrency.krwSell = this.dataService.data.values[26].sell.toFixed(4);
      this.messageCurrency.mxnBuy = this.dataService.data.values[27].buy.toFixed(4);
      this.messageCurrency.mxnSell = this.dataService.data.values[27].sell.toFixed(4);
      this.messageCurrency.myrBuy = this.dataService.data.values[28].buy.toFixed(4);
      this.messageCurrency.myrSell = this.dataService.data.values[28].sell.toFixed(4);
      this.messageCurrency.nzdBuy = this.dataService.data.values[29].buy.toFixed(4);
      this.messageCurrency.nzdSell = this.dataService.data.values[29].sell.toFixed(4);
      this.messageCurrency.phpBuy = this.dataService.data.values[30].buy.toFixed(4);
      this.messageCurrency.phpSell = this.dataService.data.values[30].sell.toFixed(4);
      this.messageCurrency.sgdBuy = this.dataService.data.values[31].buy.toFixed(4);
      this.messageCurrency.sgdSell = this.dataService.data.values[31].sell.toFixed(4);
      this.messageCurrency.thbBuy = this.dataService.data.values[32].buy.toFixed(4);
      this.messageCurrency.thbSell = this.dataService.data.values[32].sell.toFixed(4);
      this.messageCurrency.zarBuy = this.dataService.data.values[33].buy.toFixed(4);
      this.messageCurrency.zarSell = this.dataService.data.values[33].sell.toFixed(4);

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
      this.messageCurrency.bgnStatus = this.dataService.data.values[10].checked;
      this.messageCurrency.rsdStatus = this.dataService.data.values[11].checked;
      this.messageCurrency.allStatus = this.dataService.data.values[12].checked;
      this.messageCurrency.czkStatus = this.dataService.data.values[13].checked;
      this.messageCurrency.hufStatus = this.dataService.data.values[14].checked;
      this.messageCurrency.plnStatus = this.dataService.data.values[15].checked;
      this.messageCurrency.ronStatus = this.dataService.data.values[16].checked;
      this.messageCurrency.hrkStatus = this.dataService.data.values[17].checked;
      this.messageCurrency.tryStatus = this.dataService.data.values[18].checked;
      this.messageCurrency.rubStatus = this.dataService.data.values[19].checked;
      this.messageCurrency.brlStatus = this.dataService.data.values[20].checked;
      this.messageCurrency.cnyStatus = this.dataService.data.values[21].checked;
      this.messageCurrency.hkdStatus = this.dataService.data.values[22].checked;
      this.messageCurrency.idrStatus = this.dataService.data.values[23].checked;
      this.messageCurrency.ilsStatus = this.dataService.data.values[24].checked;
      this.messageCurrency.inrStatus = this.dataService.data.values[25].checked;
      this.messageCurrency.krwStatus = this.dataService.data.values[26].checked;
      this.messageCurrency.mxnStatus = this.dataService.data.values[27].checked;
      this.messageCurrency.myrStatus = this.dataService.data.values[28].checked;
      this.messageCurrency.nzdStatus = this.dataService.data.values[29].checked;
      this.messageCurrency.phpStatus = this.dataService.data.values[30].checked;
      this.messageCurrency.sgdStatus = this.dataService.data.values[31].checked;
      this.messageCurrency.thbStatus = this.dataService.data.values[32].checked;
      this.messageCurrency.zarStatus = this.dataService.data.values[33].checked;

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

  openUrl(value) {
    if (value === 'nbrm') {
      window.open("http://www.nbrm.mk/kursna_lista.nspx", "_blank");
    } else if (value === 'xe') {
      window.open("https://www.xe.com/currency/eur-euro", "_blank");
    }
  }


  private formatDateToString(date) {
    const dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
    const yyyy = date.getFullYear();
    return (dd + '.' + MM + '.' + yyyy);
  }

  onKey(event) {
    let getValue = event.target.value;
    const setZeros = getValue + '0';
    const setZeros2 = getValue + '00';
    const setZeros3 = getValue + '000';
    const setZeros4 = getValue + '.0000';

    if (event.keyCode === 13 && event.target.nodeName === 'INPUT') {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      const getType = form.elements[index + 1].getAttribute('type');
      event.target.onchange = () => {
        // when having just number (no dot)
        if (event.target.value.indexOf('.') == -1) {
          if (event.target.value.length == 1) {
            event.target.value = setZeros4;
          }
          if (event.target.value.length == 2) {
            event.target.value = setZeros4;
          }
          if (event.target.value.length == 3 || event.target.value.length == 4 || event.target.value.length == 5) {
            event.target.value = null;
            form.elements[index].select();
          }
        }
        // when having 1 number in front of dot
        if (event.target.value.indexOf('.') == 1) {
          if (event.target.value.length == 3) {
            event.target.value = setZeros3;
          }
          if (event.target.value.length == 4) {
            event.target.value = setZeros2;
          }
          if (event.target.value.length == 5) {
            event.target.value = setZeros;
          }
        }
        // when having 2 number in front of dot
        if (event.target.value.indexOf('.') == 2) {
          if (event.target.value.length == 4) {
            event.target.value = setZeros3;
          }
          if (event.target.value.length == 5) {
            event.target.value = setZeros2;
          }
          if (event.target.value.length == 6) {
            event.target.value = setZeros;
          }
        }
        // when having 3 and more numbers in front of dot
        if (event.target.value.indexOf('.') >= 3) {
          event.target.value = null;
          form.elements[index].select();
        }
      }
      if (event.target.value.length >= 1) {
        if (event.target.readOnly === true) {
          document.getElementById('passwordInput').focus();
        } else {
          if (getType=='checkbox') {
           form.elements[index + 1].focus();
          } else {
            form.elements[index + 1].select();
          }
        }
      }
    }
  }

}