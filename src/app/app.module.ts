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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    RegisterComponent,
    RecoveryComponent,
    HomeComponent,
    DetallesMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
