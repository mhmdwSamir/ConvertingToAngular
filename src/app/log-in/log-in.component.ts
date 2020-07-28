import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]/),
      Validators.minLength(5),
      Validators.maxLength(15),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.minLength(15),
    ]),
  });
  constructor() {}
  ngOnInit(): void {}
  logIn() {
    console.log(this.loginForm.value);
  }
}
