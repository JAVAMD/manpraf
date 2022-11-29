import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    EmployeeDashboardComponent,
    EmployeeinfoComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
