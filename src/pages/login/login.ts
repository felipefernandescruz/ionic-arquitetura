import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base';
import { UserRegisterPage } from '../user-register/user-register';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BasePage {

  constructor(protected injector: Injector) {
    super(injector);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  newUser(){
    this.navCtrl.push(UserRegisterPage);
  }

}
