import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Signup3Component } from './signup3/signup3.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth-guard.service';
import { AuthGuard2 } from './auth-guard2.service';

const routes: Routes = [

  {path: '', component: Signup3Component, canActivate: [AuthGuard2]},
  {path: '1', component: SignupComponent, canActivate: [AuthGuard2]},
  {path: '2', component: Signup2Component, canActivate: [AuthGuard2]},
  {path: '3', component: WelcomeComponent, canActivate: [ AuthGuard]}


];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class IndexRoutingModule { }
