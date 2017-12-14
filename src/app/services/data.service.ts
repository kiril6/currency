import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
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
        this.timer = Observable.timer(2000,5000);
        this.sub= this.timer.subscribe(() => 
        http.get('assets/currency.json?nocache=' + (new Date()).getTime(), { headers: headers })
            .map(response => response.json()).catch(this.errorHandler)
            .subscribe(data => this.data = data,
            err => console.log(err + ' currency file not found'),
            () => console.log('')));
    }
    errorHandler(error: Response) {
        console.error(error);
        return Observable.throw(error || "Server Error");
    }
}