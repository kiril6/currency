
import {throwError as observableThrowError, timer as observableTimer} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()

export class DataService {
  public readFile = 'assets/currency.json?nocache=' + (new Date()).getTime();
  public data: Array<any>;
  public timer;
  public sub: Subscription;

    constructor(private router: Router, private http: Http) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this.timer = observableTimer(2000, 5000);
        this.sub = this.timer.subscribe(() =>
        http.get('assets/currency.json?nocache=' + (new Date()).getTime(), { headers: headers }).pipe(
            map(response => response.json()), catchError(this.errorHandler), )
            .subscribe(data => this.data = data,
            err => console.log(err + ' currency file not found'),
            () => console.log('')));
    }
    errorHandler(error: Response) {
        console.error(error);
        return observableThrowError(error || 'Server Error');
    }

    reloadPage(parameter) {
        if (parameter === 'external') {
            location.href = 'http://intercoop.delovski.net';
        }  else if (parameter === 'local') {
            location.reload();
        }
    }
}

