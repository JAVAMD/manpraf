import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutuscomponentComponent } from './About/aboutuscomponent/aboutuscomponent.component';
import { ContactcomponentComponent } from './Contact/contactcomponent/contactcomponent.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { LoginComponentComponent } from './Login/login-component/login-component.component';
import { RolecomponentComponent } from './role/rolecomponent/rolecomponent.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'about', component: AboutuscomponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'contact', component: ContactcomponentComponent },
  {
    path: 'role', component: RolecomponentComponent,
    children: [
      { path: 'Admin', loadChildren: () => import('src/app/Module/admin/admin.module').then(m => m.AdminModule) },
      { path: 'Employee', loadChildren: () => import('src/app/EmployeeModule/employee/employee.module').then(m => m.EmployeeModule) },
      { path: 'Customer', loadChildren: () => import('src/app/CustomerModule/cutomer/cutomer.module').then(m => m.CutomerModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
