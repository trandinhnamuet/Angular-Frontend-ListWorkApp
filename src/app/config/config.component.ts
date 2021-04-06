import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Config } from 'protractor';
import { ConfigService } from './config.service';
import { Work } from '../work';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ConfigService],
})

export class ConfigComponent  implements OnInit {

  listWork: Work[] = [];
  result: string;

  constructor(private http: HttpClient, private configService : ConfigService) {

   }

  ngOnInit(): void {

    this.configService.getWorks()
    .subscribe( work =>
      this.listWork = work);


  }

}
