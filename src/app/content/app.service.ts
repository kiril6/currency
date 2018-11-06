
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {map, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Resolve } from '@angular/router';



export interface IMessage {
  name?: string,
  email?: string,
  messageBox?: string
}

//for update currency
export interface ICurrencies {
  eurBuy?: string,
  eurSell?: string,
  audBuy?: string,
  audSell?: string,
  cadBuy?: string,
  cadSell?: string,
  dkkBuy?: string,
  dkkSell?: string,
  jpyBuy?: string,
  jpySell?: string,
  nokBuy?: string,
  nokSell?: string,
  sekBuy?: string,
  sekSell?: string,
  chfBuy?: string,
  chfSell?: string,
  gbpBuy?: string,
  gbpSell?: string,
  usdBuy?: string,
  usdSell?: string,

  eurStatus?: boolean,
  audStatus?: boolean,
  cadStatus?: boolean,
  dkkStatus?: boolean,
  jpyStatus?: boolean,
  nokStatus?: boolean,
  sekStatus?: boolean,
  chfStatus?: boolean,
  gbpStatus?: boolean,
  usdStatus?: boolean
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
        return observableThrowError(error)
      }),)
  }

  //currency udpate
  sendCurrency(messageCurrency: ICurrencies): Observable<ICurrencies> | any { 
    return this.http.post(this.updateCurrency, messageCurrency).pipe(
      map(response => {
        // console.log('updating currency was successfull', response);
        return response;
      }),
      catchError(error => {
        // console.log('updating currency got error', error);
        return observableThrowError(error)
      }),)
  }

}