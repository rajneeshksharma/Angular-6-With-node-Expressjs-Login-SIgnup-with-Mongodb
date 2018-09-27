import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AduserService } from '../aduser.service';

@Component({
    selector: 'app-signup2',
    templateUrl: './signup2.component.html',
    styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {

    loginForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private aduserservice: AduserService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        console.log(' User Email - ' + this.loginForm.value.email + ' User Password - ' + this.loginForm.value.password);
        console.log();
    }
    checkUser(obj) {
        // console.log(obj);
        this.aduserservice.checkUser(obj);
    }
}
