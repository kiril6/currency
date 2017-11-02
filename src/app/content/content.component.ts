import { Component, OnInit } from '@angular/core';
import { AppService, IMessage } from './app.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  message: IMessage = {};


  constructor(private appService: AppService) { }


  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }

  // closeModal() {
  //   document.getElementById("myModal").classList.remove("show");
  // }

  ngOnInit() {
    // this.closeModal();
  }

}
