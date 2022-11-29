import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';

const routes: Routes = [
  {path:'',component:CustomerDashboardComponent},
  {path:'addCustomer',component:AddcustomerComponent},
  {path:'CustomerInfo',component:CustomerinfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CutomerRoutingModule { }
