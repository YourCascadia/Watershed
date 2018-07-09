import { Injectable } from '@angular/core';

import { DataStructure } from './data-structure';
import { tree } from './mock-tree-map-data';

@Injectable()
export class TreeMapDataService {

  getData(): Promise<DataStructure[]> {
    return Promise.resolve(tree);
  }
}
