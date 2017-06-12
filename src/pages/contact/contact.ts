import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GitHubService } from '../../app/services/github.service';

/**
 * @ngdoc Component
 * @name ContactPage
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description The home contact component.
*/
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [ GitHubService ]
})
export class ContactPage {

  private profile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubService: GitHubService) {
  }

  /**
   * @ngdoc method
   * @name buildForm()
   * @description suscribe to githubService and show results
  */
  ionViewDidLoad() {
    this.profile = null;
    this.githubService.getProfile()
    .subscribe(res =>{
      this.profile = res; 
    })
  }

}
