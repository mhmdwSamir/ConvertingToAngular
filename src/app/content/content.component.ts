import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../Services/config.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor(private _configService: ConfigService) {}
  servicesData;
  ngOnInit(): void {
    this.servicesData = this.getServicesData();
  }

  getServicesData() {
    return this._configService.getConfig().services;
  }
}
