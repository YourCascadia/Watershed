import { Injectable } from '@angular/core';

import { DataStructure } from '../main/data-structure';
import { INFO } from './mock-other-profile-data';

@Injectable()
export class ProfileDataService {

  getData(): Promise<DataStructure[]> {
    return Promise.resolve(INFO);
  }
}
