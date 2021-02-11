import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ElementsModule} from './elements/elements.module';
import {CollectionsModule} from './collections/collections.module';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponentComponent,
  ],
  imports: [
    BrowserModule,
    ElementsModule,
    CollectionsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
