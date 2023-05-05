import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { LatestMoviesComponent } from './components/latest-movies/latest-movies.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
// import { ServicesComponent } from './services/services.component';
// import { CardServiceComponent } from './services/card-service/card-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    LatestMoviesComponent,
    SignInComponent,
    SignUpComponent,
    // ServicesComponent,
    // CardServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
