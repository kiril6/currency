import { Component, Injectable, OnInit } from '@angular/core';
// import {DataGetService} from "./services/data.service";
// import {ActivatedRoute, Router} from "@angular/router";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as $ from 'jquery';
@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // providers: [DataGetService],
})

export class AppComponent implements OnInit {

  // constructor(public dataGetService: DataGetService) { }
  // private data;
  title = 'app';
  //  herbs = [];
  // constructor(private _CurrencyListComponent: HerbsService, private http:Http){}
  // ngOnInit() {
  //   this._CurrencyListComponent.getHerbs()
  //     .subscribe(resHerbsData => this.herbs = resHerbsData);

  //     console.log( this.getOrderSummary());


  //  data: Object;
  //   constructor(private http: Http) {
  //     http.get('assets/currency.json')
  //       .map(res => res.json())
  //       .subscribe(data => this.data = data,
  //                   err => console.log(err),
  //                   () => console.log('file rode'));

                   
  //   }
  ngOnInit() {
  }
} 


 
    // constructor(private http:Http) {
        // this.http.get('assets/currency.json')
        //         .subscribe(res => this.data = res.json());

    //  var obj;
    //      this.getJSON().subscribe(data => obj=data, error => console.log(error));

                
    // }
    

    //   public getJSON(): Observable<any> {
    //      return this.http.get("assets/currency.json")
    //                      .map((res:any) => res.json());

    //  }

  //     herbs = [];
  // constructor(private _herbService: HerbsService){}

  // constructor(private http:Http) {
  //       this.http.get('assets/currency.json')
  //               .subscribe(res => this.data = res.json());
  //   }

  //   user = {
  //   username: "",
  //   password: ""
  // };

  // errorMessage: string;

  // constructor (private ds: DataService, private route: ActivatedRoute, private router: Router) {}

  //    login() {
  //   this.ds.doLogin(this.user).subscribe(result => {

  //     console.log('dsadsadsad');
  //     if (result.user) {
  //       let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //       localStorage.setItem("user", JSON.stringify(result.user));
  //       this.router.navigate([returnUrl]);
  //     }
  //     else {
  //       this.errorMessage = "Login failed";
  //     }

  //   });
  // }

  // ngOnInit() {
  //   // this._herbService.getHerbs()
  //   //   .subscribe(resHerbsData => this.herbs = resHerbsData);
  //     console.log(this.getJSON().firstName);

    
  // }
  	
// getOrderSummary(): Observable<any> {
//     // get users from api
//     return this.http.get('assets/currency.json')//, options)
//         .map((response: Response) => {
//             console.log("mock data" + response.json());
//             return response.json();
//         }
//     )
//     // .catch(this.handleError);
// } 
// }

//  this.http.get('assets/currency.json')
//     .map((response: Response) => {
//         console.log("mock data" + response.json());
//         return response.json();
//     }
//     )
//     .catch(this.handleError);