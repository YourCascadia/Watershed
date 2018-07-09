import { Injectable } from '@angular/core';

import { DataStructure } from './data-structure';
import { data } from './mock-data';

@Injectable()
export class DataService {

  getData(): Promise<DataStructure[]> {
    return Promise.resolve(data);
  }
}
