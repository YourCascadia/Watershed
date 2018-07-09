import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';
import { DataStructure } from './data-structure';

@Component({
  selector: 'needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.css'],
  providers: [DataService]
})
export class NeedsComponent implements OnInit {
  title: string = "Needs";
  needs: DataStructure[];

  constructor(private dataService: DataService) { }
  getData(): void {
    this.dataService.getData().then(needs => this.needs = needs);
  }

  ngOnInit(): void {
    this.getData();
  }


}
