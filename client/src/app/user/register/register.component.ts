import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, sameValueAsFactory } from 'src/app/shared/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, emailValidator]],
      tel: [''],
      password: ['', [Validators.required, Validators.minLength(4)]],
      rePassword: ['', [Validators.required, sameValueAsFactory(() => this.form?.get('password'))]]
    });
  }

  register(): void {
    if (this.form.invalid) { return; }
    console.log(this.form.value);
  }

}
