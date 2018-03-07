import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Facebook } from '@ionic-native/facebook';

import { ComponentsModule } from '../components/components.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CustomFormsModule } from 'ng2-validation';

import { BaseProvider } from '../providers/base/base';
import { UserProvider } from '../providers/user/user';
import { FacebookUsersProvider } from '../providers/facebook-users/facebook-users';

import { AlertHelper } from '../helpers/alert-helper';
import { EnumHelper } from '../helpers/enum-helper';
import { LoadingHelper } from '../helpers/loading-helper';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { UserRegisterPage } from '../pages/user-register/user-register';import { StorageHelper } from '../helpers/storage-helper';
import { UserRegisterEmailPage } from '../pages/user-register-email/user-register-email';
import { MenuPage } from '../pages/menu/menu';
import { ResenhaPage } from '../pages/resenha/resenha';
import { FavoritePage } from '../pages/favorite/favorite';
import { FriendsPage } from '../pages/friends/friends';
import { MapPage } from '../pages/map/map';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { UserProfileEditPage } from '../pages/user-profile-edit/user-profile-edit';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    UserRegisterPage,
    UserRegisterEmailPage,
    MenuPage,
    ResenhaPage,
    FavoritePage,
    FriendsPage,
    MapPage,
    UserProfilePage,
    UserProfileEditPage,


  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    CustomFormsModule,
    DirectivesModule,
    PipesModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    UserRegisterPage,
    UserRegisterEmailPage,
    MenuPage,
    ResenhaPage,
    FavoritePage,
    FriendsPage,
    MapPage,
    UserProfilePage,
    UserProfileEditPage
  ],
  providers: [
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: "pt-BR" },
    StatusBar,
    SplashScreen,

    AlertHelper,
    EnumHelper,
    LoadingHelper,
    StorageHelper,
   
    BaseProvider,
    UserProvider,
    FacebookUsersProvider,



  ]
})
export class AppModule {}
