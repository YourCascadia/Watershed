import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {
  show = true;
  
  constructor() { }

  ngOnInit() {
  }

}
