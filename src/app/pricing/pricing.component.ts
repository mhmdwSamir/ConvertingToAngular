import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  pricesData;
  constructor(private _configService: ConfigService) {}
  ngOnInit(): void {
    this.pricesData = this.getPricesData();
  }

  getPricesData() {
    return this._configService.getConfig().prices;
  }
}
