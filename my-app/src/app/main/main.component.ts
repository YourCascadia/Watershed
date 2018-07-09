import { Component, OnInit } from '@angular/core';

import { ProfileDataService } from './profile-data.service';
import { DataStructure } from './data-structure';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ProfileDataService]
})


export class MainComponent implements OnInit {
  title: string = "Main View";
  data: DataStructure[];
  constructor(private profileDataService: ProfileDataService) { }
  getData(): void {
    this.profileDataService.getData().then(data => this.data = data);
  }

  ngOnInit(): void {
    this.getData();
  }

}
