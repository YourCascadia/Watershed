import { Injectable } from '@angular/core';

import { DataStructure } from './data-structure';
import { INFO } from './mock-profile-data';

@Injectable()
export class ProfileDataService {

  getData(): Promise<DataStructure[]> {
    return Promise.resolve(INFO);
  }
}
