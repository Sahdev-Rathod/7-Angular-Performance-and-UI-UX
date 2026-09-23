import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForm = this.fb.group({

    name: [
      '',
      Validators.required
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    mobile: [
      '',
      [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]
    ]

  });

  constructor(private fb: FormBuilder) {}

  submit() {

    if (this.userForm.valid) {

      console.log(this.userForm.value);

      alert('Registration Successful!');

    } else {

      this.userForm.markAllAsTouched();

    }
  }
}
