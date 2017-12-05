import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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

import { AlertHelper } from '../helpers/alert-helper';
import { EnumHelper } from '../helpers/enum-helper';
import { LoadingHelper } from '../helpers/loading-helper';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { UserRegisterPage } from '../pages/user-register/user-register';import { StorageHelper } from '../helpers/storage-helper';
import { UserRegisterEmailPage } from '../pages/user-register-email/user-register-email';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    UserRegisterPage,
    UserRegisterEmailPage,
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
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    UserRegisterPage,
    UserRegisterEmailPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: "pt-BR" },
    StatusBar,
    SplashScreen,

    AlertHelper,
    EnumHelper,
    LoadingHelper,
    StorageHelper,
   
    BaseProvider,
    UserProvider
  ]
})
export class AppModule {}
