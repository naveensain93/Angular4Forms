import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Data } from '../../models/data';

function passwordMatcher(c: AbstractControl) {
  return c.get('password').value === c.get('confirmedPassword').value ? null : {'passwordNotMatched' : true};
}
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  newPasswordForm: FormGroup;
  public key: string;
  constructor(
    private router: Router,
    private  fb: FormBuilder,
    private user: Data) {}
  ngOnInit() { 
    this.newPasswordForm = this.fb.group({
    'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    'confirmedPassword': [null, Validators.required]
    },{validator: passwordMatcher})
  
  }
  savePassword(value) { 
    for(var i=0, len = localStorage.length; i<len; i++ ) {
      this.key = localStorage.key(i);
      if(this.key === this.user.businessEmail){
        localStorage.setItem(this.user.businessEmail,JSON.stringify({name:this.user.firstName+' '+this.user.lastName,password:btoa(value.password)}));
      }
    }    
    this.router.navigate(['/home']);
  }
}
