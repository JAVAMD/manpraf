import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CutomerRoutingModule } from './cutomer-routing.module';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';


@NgModule({
  declarations: [
    AddcustomerComponent,
    CustomerinfoComponent,
    CustomerDashboardComponent
  ],
  imports: [
    CommonModule,
    CutomerRoutingModule
  ]
})
export class CutomerModule { }
