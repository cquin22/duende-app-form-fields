import { Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';


/**
 * @ngdoc Component
 * @name InputComponent
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description Render input component.
*/

@Component({
  selector: 'input-component',
  template: `<ion-list>
                <ion-item>
                    <div *ngIf="inputs.required; then thenBlock else elseBlock"></div>
                    <template #thenBlock>
                        <input class="item item-block item-md item-input" type="{{inputs.type}}" placeholder="{{inputs.label}}" name="{{inputs.name}}" [(ngModel)]="inputs.model" #ctrl="ngModel" required >
                    </template>
                     <template #elseBlock>
                        <input class="item item-block item-md item-input" type="{{inputs.type}}" placeholder="{{inputs.label}}"  name="{{inputs.name}}" [(ngModel)]="inputs.model" #ctrl="ngModel" >
                    </template>                   
                </ion-item>
            </ion-list>`
,
})
export class InputComponent {
  @Input() inputs: Array<any>;
  constructor(public navCtrl: NavController) {};

}
