import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateLoader } from '@ngx-translate/core'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  langs: string[] = []
  constructor(
    private translate: TranslateService
  ){
    this.translate.setDefaultLang('en');
    this.translate.use('es');
    this.translate.addLangs(['es','en','pt']);
    this.langs = this.translate.getLangs();
  }
  changeLang(lang:string){
    this.translate.use(lang);
  }

  ngOnInit(): void {
  }

}
