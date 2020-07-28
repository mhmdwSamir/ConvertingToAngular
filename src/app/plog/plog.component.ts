import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plog',
  templateUrl: './plog.component.html',
  styleUrls: ['./plog.component.scss'],
})
export class PlogComponent implements OnInit {
  @Input() plogData: any;
  constructor() {}

  ngOnInit(): void {}
}
