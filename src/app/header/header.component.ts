import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  header;

  constructor(private _configService: ConfigService) {}

  ngOnInit(): void {
    this.header = this.getHeaderData();
  }
  getHeaderData() {
    return this._configService.getConfig().header;
  }
}
