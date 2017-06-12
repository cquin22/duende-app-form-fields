import { Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';


/**
 * @ngdoc Component
 * @name RadioComponent
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description Render radio button component.
*/

@Component({
  selector: 'radio-component',
  template: `
              <ion-list radio-group [(ngModel)]="radio.model">
                <ion-label class="personal-label">{{radio.label}}</ion-label>
                <ion-item *ngFor="let option of radio.values">
                  <ion-label>{{option}}</ion-label>
                  <ion-radio value="{{option}}"></ion-radio>
                </ion-item>
              </ion-list>  
              `
,
})
export class RadioComponent {
  @Input() radio: Array<any>;
  constructor(public navCtrl: NavController) {};

}
