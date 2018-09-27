import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './/index-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Signup2Component } from './signup2/signup2.component';
import { Signup3Component } from './signup3/signup3.component';
import { HttpClientModule } from '@angular/common/http';
import { AduserService } from './aduser.service';
@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [SignupComponent, Signup2Component, Signup3Component]
})
export class IndexModule { }
