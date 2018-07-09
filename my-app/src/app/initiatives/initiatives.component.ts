import { Component, OnInit } from '@angular/core';

import { InitiativesDataService } from './initiatives-data.service';
import { DataStructure } from './data-structure';

@Component({
  selector: 'initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.css'],
  providers: [InitiativesDataService]
})
export class InitiativesComponent implements OnInit {

  title: string = "My Initiatives";
  data: DataStructure[];
  constructor(private initiativesDataService: InitiativesDataService) { }
  getData(): void {
    this.initiativesDataService.getData().then(data => this.data = data);
  }

  ngOnInit(): void {
    this.getData();
  }

}
