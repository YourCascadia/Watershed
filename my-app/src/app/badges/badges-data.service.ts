import { Injectable } from '@angular/core';

import { DataStructure } from './data-structure';
import { data } from './mock-badges-data';

@Injectable()
export class BadgesDataService {

  getData(): Promise<DataStructure[]> {
    return Promise.resolve(data);
  }
}
