import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import { Config } from 'protractor';
import { ConfigService } from '../config.service';
import { Work } from '../work';
import { Observable } from 'rxjs';
import { worker } from 'cluster';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ConfigService],
  styleUrls: ['./config.component.css']
})

export class ConfigComponent  implements OnInit{

  listWork: Work[] = [];
  result: string;
  newWork: Work;
  selectedWork: Work;
  selected : boolean = false;
  constructor(private http: HttpClient, private configService : ConfigService) {

  }

  ngOnInit(): void {
    this.getWork();
  }

  onSelect(wk: Work) {
    this.selectedWork = wk;
    this.selected = true;
  }

  getWork() {
    this.listWork = [];
    this.configService.getWorks().subscribe( work =>
      {
        this.listWork = work;
      });
  }

  addWork(nid: number, nworkName: string, nisCompleted: string) {
    this.newWork = {
      id: nid,
      workName: nworkName,
      isCompleted: nisCompleted
    };

    this.configService.postWorks(this.newWork).subscribe(/*aWork =>
      {
        this.listWork.push(aWork);
      }*/);
      this.listWork.push(this.newWork);

      this.listWork.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
  }

  delWork(wk: Work) {
    this.configService.deleteWorks(wk).subscribe();

    const index: number = this.listWork.indexOf(wk);
    this.listWork.splice(index, 1);

  }

  fixWork(wk: Work, fixWorkName: string, fixIsCompleted: string) {
    const fwk = {
      id: wk.id,
      workName: fixWorkName,
      isCompleted: fixIsCompleted,
    };
    this.configService.putWorks(wk, fwk).subscribe();

    const index: number = this.listWork.indexOf(wk);
    this.listWork.splice(index, 1);
    this.listWork.push(fwk);
  }

}
