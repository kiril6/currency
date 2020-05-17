import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../services/data.service';
import { Http} from '@angular/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public lngBool: boolean;
  public ip:any;

  constructor(private translate: TranslateService, public dataService: DataService, private http: Http) {
    translate.setDefaultLang('en');

    const cookie = this.getCookie("language");
    if (!cookie) {
      http.get('http://ip-api.com/json/' + this.getCookie('ip_address'))
      .map(response => response.json())
      .subscribe(
        (response) => {
            this.ip = response.country;
            if(this.ip === 'North Macedonia') {
                this.translate.use('mk');
                this.lngBool= false;
            }
          }
      );
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.setCookie('language', language, 365);
    this.lngBool = !this.lngBool;
    this.closeToggle();
  }

  closeToggle() {
    if (screen.width < 1200) {
      document.getElementById('toggleNav').click();
    }
  }

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return;
  }

  checkCookie() {
    this.lngBool = true;
    var cookie = this.getCookie("language");
    if (cookie != "" && cookie == "en") {
      this.translate.use('en');
      this.lngBool = true;
    } else if (cookie != "" && cookie == "mk") {
      this.translate.use('mk');
      this.lngBool = false;
    }
  }

  ngOnInit() {
    this.checkCookie();
  }
}
