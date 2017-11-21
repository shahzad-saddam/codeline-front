import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { MetaWetherService } from '../../services/meta-wether.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private defaultCities = [
    'Istanbul',
    'Berlin',
    'London',
    'Helsinki',
    'Dublin',
    'Vancouver'
  ];

  private searchResult: any= [];

  constructor(public metaWetherService: MetaWetherService, ) { }

  ngOnInit() {
    this.searchResult = this.metaWetherService.searchMultiple(this.defaultCities)
    .map((result: any) => result.json()[0]);
  }

}
