import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  activetab = 'home';
  constructor() {}

  ngOnInit(): void {}

  // getActiveTab(tabName: string) {
  //   this.activetab = tabName;
  // }
}
