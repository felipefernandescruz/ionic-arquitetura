import { Component,Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base';
import { UserRegisterPage } from '../user-register/user-register';
import { LoginModel } from '../../models/login.model';
import { FormGroup } from '@angular/forms/src/model';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BasePage {

  loginModel:LoginModel;
  loginForm: FormGroup;

  public isSubmitted: boolean;

  constructor(protected injector: Injector) {
    super(injector);

    this.initFormValidators();

    this.loginModel = new LoginModel();
  }

  private initFormValidators(){
    this.loginForm= this.formBuilder.group({
      email: ['',this.validators.compose([this.validators.email,this.validators.required])],
      password: ['',this.validators.compose([this.validators.required])]
    })
  }

  public onSubmit(){
    this.isSubmitted = true;
    if(this.loginForm.valid){     
      this.navCtrl.push(TabsPage);      
    }
  }

  newUser(){
    this.navCtrl.push(UserRegisterPage);
  }

}
