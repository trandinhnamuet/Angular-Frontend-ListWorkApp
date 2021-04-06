import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Work } from '../work';
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  configUrl = 'assets/config.json';
  getConfig() {
    return this.http.get(this.configUrl);
  }

  getWorks(): Observable<Work[]> {
    return this.http.get<Work[]>('https://localhost:44337/api/Works');
  }

  /*
  postWorks()

  putWorks()

  deleteWorks()

  */
}
