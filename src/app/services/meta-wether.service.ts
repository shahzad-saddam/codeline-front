import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { ServiceConfig } from "../services-config";

@Injectable()
export class MetaWetherService {

  private url: string = '';

  constructor(private http: Http) {
    this.url = ServiceConfig.baseUrl;
  }

  /**
   * Search weather with keyword
   *
   * @param keyword
   */
  search(keyword: string) {
      let url = ServiceConfig.metaWeather.search.replace("{keyword}", keyword);
      return this.get(url);
  }


  searchMultiple(cities: Array<any>) : Observable<any>{

    return Observable.from(cities)
      .map((city: any) => city)
      .flatMap((city) => {
         return this.search(city)
      });

  }


  /**
   * get weather detail for location woeid
   *
   * @param keyword
   */
  location(woeid: string) {
    let url = ServiceConfig.metaWeather.location.replace("{woeid}", woeid);
    return this.get(url).subscribe(data => {
      return data.json();
    });
  }


  /**
   * Detailed implementation of get method for http request
   *
   * @param endpoint
   * @param params
   * @param options
   * @param isCompleteUrl
   */
  get(endpoint: string, params?: any, options?: RequestOptionsArgs, isCompleteUrl: boolean = false) {
    if (!options) {
      options = new RequestOptions();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    let url = (isCompleteUrl) ? endpoint : this.url + endpoint;

    return this.http.get(url, options);
  }

}
