import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rolecomponent',
  templateUrl: './rolecomponent.component.html',
  styleUrls: ['./rolecomponent.component.css']
})
export class RolecomponentComponent implements OnInit {

  constructor() { }
  
  userRole:string;
  ngOnInit(): void {
  this.userRole=  localStorage.getItem('role')
  }
}
