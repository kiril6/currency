import { Component, OnInit } from '@angular/core';
import { AppService, IMessage } from './app.service';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  public success: boolean;
  public modalElement;
  public editLink: boolean = false;

  message: IMessage = {};

  constructor(private appService: AppService, private router: Router) { }




  private subscribeRouterChanges() {
    this.router.events.subscribe((val: NavigationStart) => {
      if (val.url) {
        if (val.url.includes('update')) {
          this.editLink = true;
        } else {
          this.editLink = false;
        }
      }
    });
  }


  sendEmail(message: IMessage) {

    this.appService.sendEmail(message).subscribe(res => {
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
    this.subscribeRouterChanges();
  }

}
