import { Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';


/**
 * @ngdoc Component
 * @name CheckComponent
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description Render check box component.
*/
@Component({
  selector: 'check-component',
  template: `
          <ion-list>
            <ion-label class="personal-label">{{check.label}}</ion-label>
            <ion-item *ngFor="let option of check.values">
              <ion-label>{{option}}</ion-label>
              <ion-checkbox></ion-checkbox>
            </ion-item>
          </ion-list>  
              `
,
})
export class CheckComponent {
  @Input() check: Array<any>;
  constructor(public navCtrl: NavController) {};

}
