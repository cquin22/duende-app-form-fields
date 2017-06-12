import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

const BASE_URL = 'https://api.github.com';
 /**
  * @ngdoc Injectable
  * @name GitHubService
  * @author Cristian Quintero <cristianqr22@gmail.com>
  * @description Connect with api and build form
 */

@Injectable()
export class GitHubService {
  constructor(public http: Http) { }
  /**
   * @ngdoc method
   * @name getForm()
   * @description map observable and get profile info for github
  */
  getProfile() {
    let url = BASE_URL + '/users/cquin22';
    let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(res => res.json());
  }
}