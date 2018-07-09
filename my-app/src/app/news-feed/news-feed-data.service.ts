import { Injectable } from '@angular/core';

import { DataStructure } from './data-structure';
import { data } from './mock-news-feed-data';

@Injectable()
export class NewsFeedDataService {

  getData(): Promise<DataStructure[]> {
    return Promise.resolve(data);
  }
}
