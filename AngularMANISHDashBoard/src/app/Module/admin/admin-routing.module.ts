import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdmininfoComponent } from './admininfo/admininfo.component';
import { AdminremovedComponent } from './adminremoved/adminremoved.component';

const routes: Routes = [
  {path:'', component:AdminDashBoardComponent},
  {path:'addAdmin',component:AddAdminComponent},
  {path:'AdminInfo',component:AdmininfoComponent},
  {path:'removeAd', component:AdminremovedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
