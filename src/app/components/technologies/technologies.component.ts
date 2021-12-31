import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { TECHNOLOGIES } from '../../constants/technologies';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  providers: [NgbRatingConfig]
})
export class TechnologiesComponent implements OnInit {
  
  technologies = TECHNOLOGIES;

  constructor(config: NgbRatingConfig) { 
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

}
