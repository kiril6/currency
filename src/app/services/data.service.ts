import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class DataService {
    public data: Array<any>;
    constructor(private router: Router, private http: Http) {
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
}