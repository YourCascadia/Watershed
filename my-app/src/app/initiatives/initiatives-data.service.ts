import { Injectable } from '@angular/core';

import { DataStructure } from './data-structure';
import { INFO } from './mock-initiatives-data';

@Injectable()
export class InitiativesDataService {

  getData(): Promise<DataStructure[]> {
    return Promise.resolve(INFO);
  }
}
