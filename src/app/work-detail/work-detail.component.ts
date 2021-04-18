import { ConfigService } from './../config.service';
import { Work } from './../work';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  work: Work;
  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
    this.getWork();
  }

  getWork(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.configService.getWork(id)
    .subscribe(work => this.work = work);
  }

}
