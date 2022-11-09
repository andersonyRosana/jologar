import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { CorsModule } from './cors/cors.module';

import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './main/navigation/navigation.component';
import { FooterComponent } from './main/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CorsModule,
    SharedModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
