import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Work } from './work';
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  //configUrl = 'assets/config.json';
  urlLink: string;

  getConfig() {
    return this.http.get('https://localhost:44337/api/Works');
    //return this.http.get(this.configUrl);
  }

  getWork(id: number): Observable<Work> {
    this.urlLink = 'https://localhost:44337/api/Works' + id;
    console.log('___________');
    console.log(this.urlLink);
    console.log('__________');
    return this.http.get<Work>(this.urlLink);
  }

  getWorks(): Observable<Work[]> {
    console.log("work getting");
    return this.http.get<Work[]>('https://localhost:44337/api/Works');
  }

  postWorks(newWork: Work): Observable<Work> {
    if (!newWork) {return;}

    console.log('postWork ' + newWork.workName);
    return this.http.post<Work>('https://localhost:44337/api/Works', newWork);

  }

  deleteWorks(workToDel: Work): Observable<{}> {
    this.urlLink = 'https://localhost:44337/api/Works/' + workToDel.id;

    return this.http.delete(this.urlLink);
    //return this.http.delete('https://localhost:44337/api/Works' + workToDel.id);
  }




  putWorks(fixWork: Work, fwk: Work): Observable<Work> {
    this.urlLink = 'https://localhost:44337/api/Works/' + fixWork.id;
    return this.http.put<any>(this.urlLink, fwk);
  }
}

