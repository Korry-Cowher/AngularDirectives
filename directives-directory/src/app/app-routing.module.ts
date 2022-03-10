import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecimalControlTestComponent } from './components/decimal-control-test/decimal-control-test.component';
import { HomeComponent } from './components/home/home/home.component';
import { PhoneMaskTestComponent } from './components/phone-mask-test/phone-mask-test.component';

const routes: Routes = [
  {
    path: 'phone-mask-test',
    component: PhoneMaskTestComponent,
  },
  {
    path: 'decimal-control-test',
    component: DecimalControlTestComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
