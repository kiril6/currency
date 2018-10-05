import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public lngCheck = 'en';
  public lngBool = true;
  public home = () => location.href="http://intercoop.delovski.net";

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    if (language == this.lngCheck) {
      this.lngBool = true;
    } else {
      this.lngBool = false;
    }
  }

  closeToggle() {
    if (screen.width < 1200) {
      document.getElementById("toggleNav").click();
    }
  }
}