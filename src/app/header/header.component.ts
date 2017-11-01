import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public lngCheck='en';
  public lngBool=true;

  constructor(private translate: TranslateService) {

    translate.setDefaultLang('en');
   }
   switchLanguage(language: string) {
    this.translate.use(language);
    if(language==this.lngCheck){
      this.lngBool=true;
    }else {
      this.lngBool=false;
    }
  }

  //  lngChange() {
  //   window.alert('Macedonian language\n will be available soon.');
  // }

  ngOnInit() {
  }

}