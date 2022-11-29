import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';

const routes: Routes = [
  {path:'', component:EmployeeDashboardComponent},
  {path:'addEmployee',component:AddEmployeeComponent},
  {path:'EmployeeInfo',component:EmployeeinfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
