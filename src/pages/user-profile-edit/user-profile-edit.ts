import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { ProfileModel } from '../../models/profile.model';
import { BasePage } from '../base';

/**
 * Generated class for the UserProfileEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile-edit',
  templateUrl: 'user-profile-edit.html',
})
export class UserProfileEditPage extends BasePage{
  public profileModel: ProfileModel;
  public profileForm: FormGroup;

  public isSubmitted: boolean;
  
  constructor(protected injector: Injector) {
    super(injector);

    this.initFormValidators();

    this.profileModel = new ProfileModel();
  }

  ionViewDidLoad() {}

  private initFormValidators(){
    this.profileForm = this.formBuilder.group({
      userName: ['', this.validators.compose([this.validators.required])],
      lastName: ['', this.validators.compose([this.validators.required])],
      description: ['', this.validators.compose([this.validators.email, this.validators.required])],
    });
  }
  
  public onSubmit(){}
}
