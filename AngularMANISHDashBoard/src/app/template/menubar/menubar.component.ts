import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/Model/menu';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  @Input() role;

  constructor() { }

  menu:Array<any>
  ngOnInit(): void {
   this.menu= Menu.menu
  }

}
