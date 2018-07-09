import { Component, OnInit } from '@angular/core';

import { BarsDataService } from './bars-data.service';
import { DataStructure } from './data-structure';


@Component({
  selector: 'bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css'],
  providers: [BarsDataService]
})
export class BarsComponent implements OnInit {
  title: string = "Bars";
  bars: DataStructure[];
  barsResult: number;


  constructor(private barsDataService: BarsDataService) { }

  getData(): void {
    this.barsDataService.getData().then(bars => this.bars = bars);
    
  }

  ngOnInit(): void {
    this.getData();
  }

}
