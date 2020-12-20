import { Component } from '@angular/core';
import { TranslateService, TranslateLoader } from '@ngx-translate/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-hub';
  constructor(
    private translate: TranslateService
  ){
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
