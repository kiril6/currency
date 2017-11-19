import { Component, OnInit } from '@angular/core';
import { AppService, IMessage } from './app.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  public success:boolean;
  public modalElement;

  message: IMessage = {};

  constructor(private appService: AppService) { }


  sendEmail(message: IMessage) {
    
    this.appService.sendEmail(message).subscribe(res => {
      this.success=true;
      // alert('The form has been sent!');
      // console.log('AppComponent Success', res);
    }, error => {
      this.success=false;
      // alert('The form was not sent!\n Please refresh and try again.');
      this.modalElement = document.getElementById('myModal');
      this.modalElement.className += " showB";
      // console.log('AppComponent Error', error);
    })
  }

}
