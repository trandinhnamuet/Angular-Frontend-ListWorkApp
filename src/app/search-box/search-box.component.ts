import { Component } from '@angular/core';
import { Work } from '../work';
import { ConfigService } from '../config.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  providers: [ConfigService],
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent{

  searchTextExist: boolean = false;
  constructor(private http: HttpClient, private configService : ConfigService) {

  }
  listWorkSearch: Work[] = [];
  listWork: Work[] = [];
  searchText: string;

  search(searchText: string) {
    this.searchTextExist = true;

    this.listWorkSearch = [];
    console.log(9999);
    this.configService.getWorks().subscribe( work =>
      {
        this.listWork = work;
      });
      console.log(4444444444444444);
    this.listWork.forEach(w => {
      if(w.workName.includes(searchText)) {
        this.listWorkSearch.push(w);
      }

      console.log(555555555555);
    });
  }
}
