import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-emp-reg-form',
  imports: [ReactiveFormsModule],
  templateUrl: './emp-reg-form.html',
  styleUrl: './emp-reg-form.css'
})
export class EmpRegForm {
  // frmcntrl = new FormControl(''); for just one field, but not recommended for many fields.
  empform = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, ValidateEmail])
  });

  submitted = false;

}
export function ValidateEmail(control: FormControl): ValidationErrors | null {
  const EMAIL_REGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return EMAIL_REGEX.test(control.value)
    ? null
    : { emailInvalid: { message: 'Invalid format!' } };
}
