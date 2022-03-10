import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { PhoneMaskTestComponent } from './components/phone-mask-test/phone-mask-test.component';
import { AppRoutingModule } from './app-routing.module';
import { DecimalPlacesDirective } from './directives/decimal-places.directive';
import { DecimalControlTestComponent } from './components/decimal-control-test/decimal-control-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneMaskDirective,
    PhoneMaskTestComponent,
    DecimalPlacesDirective,
    DecimalControlTestComponent
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
