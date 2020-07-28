import { Validator, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  validate(control: AbstractControl) {
    const { password, confirmPassword } = control.value;
    console.log(password, confirmPassword);
    if (password === confirmPassword) {
      return null;
    } else {
      return { passwordDontMatch: true };
    }
  }
}
