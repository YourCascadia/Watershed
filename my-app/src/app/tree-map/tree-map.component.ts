import { Component, OnInit } from '@angular/core';

import { TreeMapDataService } from './tree-map-data.service';
import { DataStructure } from './data-structure';

@Component({
  selector: 'tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.css'],
  providers: [TreeMapDataService]
})
export class TreeMapComponent implements OnInit {

  title: string = "Tree Map";
  data: DataStructure[];
  constructor(private treeMapDataService: TreeMapDataService) { }
  getData(): void {
    this.treeMapDataService.getData().then(data => this.data = data);
  }

  ngOnInit(): void {
    this.getData();
  }

}
