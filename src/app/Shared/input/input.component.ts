import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() type: string;
  @Input() placeholder: string;
  @Input() control: FormControl;
  @Input() controlType: string;
  @Input() label: string;
  @Input() rows: string;
  @Input() cols: string;

  constructor() {}

  ngOnInit(): void {}
}
