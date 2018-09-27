import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AduserService } from '../aduser.service';
@Component({
    selector: 'app-signup3',
    templateUrl: './signup3.component.html',
    styleUrls: ['./signup3.component.css']
})
export class Signup3Component {

    signupForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private aduserservice: AduserService) {
        this.createForm();
    }

    createForm() {
        this.signupForm = this.formBuilder.group({
            userType: ['', Validators.required],
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            gender: ['', Validators.required],
            Pnumber: ['', [Validators.required, Validators.minLength(10)]],
            password: ['', [
                Validators.required,
                Validators.minLength(8)
            ]],
            cpassword: ['', [
                Validators.required,
                Validators.minLength(8)
            ]],
        }, {
            validator: this.pwdMatchValidator

            });

    }
    pwdMatchValidator(frm: FormGroup) {
        return frm.get('password').value === frm.get('cpassword').value
            ? null : { 'mismatch': true };
    }

    get f() { return this.signupForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }
        // alert(JSON.stringify(this.signupForm.value));
        // console.log(this.signupForm.value);
    }
    addAdUser(obj) {
        console.log(obj);
    this.aduserservice.addAdUser(obj);
    }

}
