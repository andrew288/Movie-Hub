import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { SharedModule} from './shared/shared.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { RegisterComponent } from './registrar/register/register.component';
import { RecoveryComponent } from './recovery/recovery/recovery.component';
import { HomeComponent } from './home/home.component';
import { DetallesMovieComponent } from './detalles-movie/detalles-movie.component';
import { MapaSitioComponent } from './mapa-sitio/mapa-sitio.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    RegisterComponent,
    RecoveryComponent,
    HomeComponent,
    DetallesMovieComponent,
    MapaSitioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    },
    ),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
