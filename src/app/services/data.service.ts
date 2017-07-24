
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()

export class HerbsService {
  private _url= 'assets/currency.json';
  constructor(private _http: Http) {}
  getHerbs () {
    return this._http.get(this._url)
      .map((response: Response) => response.json());
  }
}