import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-reg-form',
  imports: [ReactiveFormsModule],
  templateUrl: './emp-reg-form.html',
  styleUrl: './emp-reg-form.css'
})
export class EmpRegForm {
  // frmcntrl = new FormControl(''); for just one field, but not recommended for many fields.
  empform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  submitted = false;
}
