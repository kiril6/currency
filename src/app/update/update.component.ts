import { Component, OnInit } from '@angular/core';
import { AppService, ICurrencies } from '../content/app.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss', '../currency-list/currency-list.component.scss']
})
export class UpdateComponent implements OnInit {
  public success: boolean;
  public modalElement;
  //update currency
  messageCurrency: ICurrencies = {};

  constructor(private appService: AppService) { }
  
    //update currency
    sendCurrency(messageCurrency: ICurrencies) {
      console.log('crucc sent');
          this.appService.sendCurrency(messageCurrency).subscribe(res => {
            this.success = true;
            // alert('The form has been sent!');
            // console.log('AppComponent Success', res);
          }, error => {
            this.success = false;
            // alert('The form was not sent!\n Please refresh and try again.');
            this.modalElement = document.getElementById('myModal');
            this.modalElement.className += " showB";
            // console.log('AppComponent Error', error);
          })
        }

  ngOnInit() {
  }

}
