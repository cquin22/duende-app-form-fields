import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormService } from '../../app/services/form.service';

/**
 * @ngdoc Component
 * @name HomePage
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description The home page component.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ FormService ]
})
export class HomePage {
  public fields : any;
  constructor(public navCtrl: NavController, public formService: FormService) {};

  /**
   * @ngdoc method
   * @name buildForm()
   * @description suscribe to formService and show results
  */
  buildForm(){
    this.fields = null;
    this.formService.getForm()
    .subscribe(res =>{
      this.fields = res; 
    })
  }

  /**
   * @ngdoc method
   * @name reloadForm()
   * @description listen click, and call the buildForm method
  */
  reloadForm(){
    this.buildForm();
  }

  /**
   * @ngdoc method
   * @name reloadForm()
   * @description listen init component, and call the buildForm method
  */
  ionViewDidLoad(){
    this.buildForm();
  }

}
