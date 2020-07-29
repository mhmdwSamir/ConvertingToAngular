import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactUsForm = new FormGroup({
    userName: new FormControl(null, []),
    email: new FormControl(null, [Validators.email]),
    message: new FormControl(null, []),
  });
  constructor() {}

  ngOnInit(): void {}

  Send() {
    console.log(this.contactUsForm.value);
  }
}
