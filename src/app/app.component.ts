import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { Page } from './models/Page'

/**
 * @ngdoc Component
 * @name BuildFormsApp
 * @author Cristian Quintero <cristianqr22@gmail.com>
 * @description The root component of the APP.
*/

@Component({
  templateUrl: 'app.html'
})
export class BuildFormsApp {
  /**
   * @description View child vav of nav
  */   
  @ViewChild('NAV') nav: Nav;

  /**
   * @ngdoc model
   * @description root page
  */    
  public rootPage: any;

  /**
   * @ngdoc model
   * @description List of pages
  */   
  public pages: Array<Page>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    /**
     * @ngdoc method
     * @name ready()
     * @param: {Function}
     * @description Start application when device is ready
    */
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    /**
     * @ngdoc model
     * @description Map root page
    */ 
    this.rootPage = HomePage;

    /**
     * @ngdoc model
     * @description Create application pages and paths
    */
    this.pages = [
      { title: 'Inicio',          component: HomePage,   icon: 'home'},
      { title: 'Sobre mi', component: ContactPage, icon: 'person'},
    ];
  }

  /**
   * @ngdoc method
   * @name goToPage()
   * @param: {Any} page 
   * @description set root of receipt page
  */
  goToPage(page){
    this.nav.setRoot(page);
  }


}

