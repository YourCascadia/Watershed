import { Injectable } from '@angular/core';

import { DataStructure } from './data-structure';
import { data } from './mock-bars-data';

@Injectable()
export class BarsDataService {

  getData(): Promise<DataStructure[]> {
    return Promise.resolve(data);
  }
}
