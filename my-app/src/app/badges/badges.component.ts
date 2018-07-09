import { Component, OnInit } from '@angular/core';

import { BadgesDataService } from './badges-data.service';
import { DataStructure } from './data-structure';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css'],
  providers: [BadgesDataService]
})
export class BadgesComponent implements OnInit {
  title: string = "Badges";
  badges: DataStructure[];

  constructor(private badgesDataService: BadgesDataService) { }

  getData(): void {
    this.badgesDataService.getData().then(badges => this.badges = badges);
  }

  ngOnInit(): void {
    this.getData();
  }

}
