import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   aFormGroup!: FormGroup;


  constructor(private formBuilder:FormBuilder) { }


  /*registrationForm = this.formBuilder.group({
    Identifiant:['', [Validators.required]],
    MotDePasse: [''],
    confirmMotdepasse:['']
  }, {Validators:PasswordValidator});*/


  identifiantControl = new FormControl('', [
    Validators.required
  ]);

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();


  visible = true;

  siteKey:string="6Ldcra8bAAAAALPl2LeT8_wtlJkOkkvJwmMI7sde";

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }



}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
}


