import { Component, OnInit } from '@angular/core';

import { ProfileDataService } from '../main/profile-data.service';
import { DataStructure } from '../main/data-structure';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.component.html',
  styleUrls: ['./other-profile.component.css'],
  providers: [ProfileDataService]
})
export class OtherProfileComponent implements OnInit {
  title: string = "Other Profile";
  data: DataStructure[];
  constructor(private profileDataService: ProfileDataService) { }
  getData(): void {
    this.profileDataService.getData().then(data => this.data = data);
  }

  ngOnInit(): void {
    this.getData();
  }

}
