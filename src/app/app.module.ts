import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './routing.module';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { Data } from './models/data';

import { MailsendService } from './service/mailsend.service';

import { AppComponent } from './app.component';
import { VerifyDialog } from './components/signup/signup.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FullscreenDirective } from './directives/fullscreen.directive';
import { ContentComponent } from './components/content/content.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { PasswordComponent } from './components/password/password.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    FullscreenDirective,
    ContentComponent,
    SignupComponent,
    VerifyDialog,
    HeaderComponent,
    PasswordComponent,
    SigninComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [MailsendService,Data],
  bootstrap: [AppComponent],
  entryComponents: [VerifyDialog]
})
export class AppModule { }
