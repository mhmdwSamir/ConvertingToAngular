import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../match-password';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup(
    {
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25),
      ]),
    },
    { validators: this._matchPassword.validate }
  );
  constructor(private _matchPassword: MatchPassword) {}
  ngOnInit(): void {}
}
