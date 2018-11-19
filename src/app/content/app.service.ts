
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export interface IMessage {
  name?: string;
  email?: string;
  messageBox?: string;
}

// for updating currency
export interface ICurrencies {
  eurBuy?: string;
  eurSell?: string;
  audBuy?: string;
  audSell?: string;
  cadBuy?: string;
  cadSell?: string;
  dkkBuy?: string;
  dkkSell?: string;
  jpyBuy?: string;
  jpySell?: string;
  nokBuy?: string;
  nokSell?: string;
  sekBuy?: string;
  sekSell?: string;
  chfBuy?: string;
  chfSell?: string;
  gbpBuy?: string;
  gbpSell?: string;
  usdBuy?: string;
  usdSell?: string;

  bgnBuy?: string;
  bgnSell?: string;
  rsdBuy?: string;
  rsdSell?: string;
  allBuy?: string;
  allSell?: string;
  czkBuy?: string;
  czkSell?: string;
  hufBuy?: string;
  hufSell?: string;
  plnBuy?: string;
  plnSell?: string;
  ronBuy?: string;
  ronSell?: string;
  hrkBuy?: string;
  hrkSell?: string;
  tryBuy?: string;
  trySell?: string;
  rubBuy?: string;
  rubSell?: string;
  brlBuy?: string;
  brlSell?: string;
  cnyBuy?: string;
  cnySell?: string;
  hkdBuy?: string;
  hkdSell?: string;
  idrBuy?: string;
  idrSell?: string;
  ilsBuy?: string;
  ilsSell?: string;
  inrBuy?: string;
  inrSell?: string;
  krwBuy?: string;
  krwSell?: string;
  mxnBuy?: string;
  mxnSell?: string;
  myrBuy?: string;
  myrSell?: string;
  nzdBuy?: string;
  nzdSell?: string;
  phpBuy?: string;
  phpSell?: string;
  sgdBuy?: string;
  sgdSell?: string;
  thbBuy?: string;
  thbSell?: string;
  zarBuy?: string;
  zarSell?: string;

  eurStatus?: boolean;
  audStatus?: boolean;
  cadStatus?: boolean;
  dkkStatus?: boolean;
  jpyStatus?: boolean;
  nokStatus?: boolean;
  sekStatus?: boolean;
  chfStatus?: boolean;
  gbpStatus?: boolean;
  usdStatus?: boolean;
  bgnStatus?: boolean;
  rsdStatus?: boolean;
  allStatus?: boolean;
  czkStatus?: boolean;
  hufStatus?: boolean;
  plnStatus?: boolean;
  ronStatus?: boolean;
  hrkStatus?: boolean;
  tryStatus?: boolean;
  rubStatus?: boolean;
  brlStatus?: boolean;
  cnyStatus?: boolean;
  hkdStatus?: boolean;
  idrStatus?: boolean;
  ilsStatus?: boolean;
  inrStatus?: boolean;
  krwStatus?: boolean;
  mxnStatus?: boolean;
  myrStatus?: boolean;
  nzdStatus?: boolean;
  phpStatus?: boolean;
  sgdStatus?: boolean;
  thbStatus?: boolean;
  zarStatus?: boolean;
}

@Injectable()
export class AppService {
  private emailUrl = '/assets/mailer.php';
  private updateCurrency = '/assets/updateCurrency.php';
  constructor(private http: Http) {

  }
  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message).pipe(
      map(response => {
        // console.log('Sending email was successfull', response);
        return response;
      }),
      catchError(error => {
        // console.log('Sending email got error', error);
        return observableThrowError(error);
      }));
  }

  // currency udpate
  sendCurrency(messageCurrency: ICurrencies): Observable<ICurrencies> | any {
    return this.http.post(this.updateCurrency, messageCurrency).pipe(
      map(response => {
        // console.log('updating currency was successfull', response);
        return response;
      }),
      catchError(error => {
        // console.log('updating currency got error', error);
        return observableThrowError(error);
      }));
  }

}
