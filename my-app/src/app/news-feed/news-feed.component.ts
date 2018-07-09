import { Component, OnInit } from '@angular/core';

import { NewsFeedDataService } from './news-feed-data.service';
import { DataStructure } from './data-structure';

@Component({
  selector: 'news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
  providers: [NewsFeedDataService]
})
export class NewsFeedComponent implements OnInit {
  title: string = "News Feed";
  news: DataStructure[];

  constructor(private newsFeedDataService: NewsFeedDataService) { }
  getData(): void {
    this.newsFeedDataService.getData().then(news => this.news = news);
  }

  ngOnInit(): void {
    this.getData();
  }

}
