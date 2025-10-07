import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  standalone: true,
  providers : [{provide: NG_VALIDATORS, useExisting: EmailValidator, multi: true}]
})
export class EmailValidator implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const EMAIL_REGEX = /^([a-zA-Z0-9_/./-]+)@([a-zA-Z0-9_/./-]+)\.([a-zA-Z0-9]{2,5})$/ ;
    const valid = EMAIL_REGEX.test(control.value);
    return valid? null : {emailInvalid:{message : 'InvalidFormat'}};
  }
}
