import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Signup3Component } from './signup3/signup3.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';

const routes: Routes = [

  {path: '', component: Signup3Component},
  {path: '1', component: SignupComponent},
  {path: '2', component: Signup2Component}


];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class IndexRoutingModule { }
