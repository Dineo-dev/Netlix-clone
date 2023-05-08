import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { LatestMoviesComponent } from './components/latest-movies/latest-movies.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { SuggestuonPageComponent } from './components/suggestuin-page/suggestuon-page.component';
import { SuggestionPageComponent } from './components/suggestion-page/suggestion-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { OnViewComponent } from './components/on-view/on-view.component';
import { SplashComponent } from './components/splash/splash.component';
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
    BackButtonComponent,
    SuggestuonPageComponent,
    SuggestionPageComponent,
    ErrorPageComponent,
    OnViewComponent,
    SplashComponent,
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
