import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { PhoneMaskTestComponent } from './components/phone-mask-test/phone-mask-test.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PhoneMaskDirective,
    PhoneMaskTestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule, 
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
