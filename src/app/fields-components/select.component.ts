import { Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';


/**
 * @ngdoc Component
 * @name SelectComponent
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description Render select component.
*/

@Component({
  selector: 'select-component',
  template: `<ion-item>
                <ion-label class="personal-label">{{select.label}}</ion-label>
                <ion-select [(ngModel)]="select.model">
                    <ion-option *ngFor="let option of select.values" value="{{option}}">{{option}}</ion-option>
                </ion-select>
            </ion-item>`
,
})
export class SelectComponent {
  @Input() select: Array<any>;
  constructor(public navCtrl: NavController) {};

}
