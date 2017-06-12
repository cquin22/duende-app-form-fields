import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://34.194.15.225';

/**
 * @ngdoc Injectable
 * @name FormService
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description Connect with api and build form
*/

@Injectable()
export class FormService {

  constructor(public http: Http) { }
  /**
   * @ngdoc method
   * @name getForm()
   * @description map observable and get new fields to the form
  */
  getForm() {
    let url = BASE_URL + '/form-fields';
    let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options)
      .map(res => res.json());
  }
}