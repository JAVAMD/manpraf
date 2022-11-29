import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdminremovedComponent } from './adminremoved/adminremoved.component';
import { AdmininfoComponent } from './admininfo/admininfo.component';


@NgModule({
  declarations: [
    AddAdminComponent,
    AdminDashBoardComponent,
    AdminremovedComponent,
    AdmininfoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
