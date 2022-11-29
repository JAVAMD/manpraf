import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './Home/home-component/home-component.component';
import { LoginComponentComponent } from './Login/login-component/login-component.component';
import { AboutuscomponentComponent } from './About/aboutuscomponent/aboutuscomponent.component';
import { ContactcomponentComponent } from './Contact/contactcomponent/contactcomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolecomponentComponent } from './role/rolecomponent/rolecomponent.component';
import { HeaderComponent } from './template/header/header.component';
import { MenubarComponent } from './template/menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    AboutuscomponentComponent,
    ContactcomponentComponent,
    RolecomponentComponent,
    HeaderComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
