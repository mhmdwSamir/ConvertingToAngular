import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private _configService: ConfigService) {}
  footerData;
  ngOnInit(): void {
    this.footerData = this.getFooterData();
  }
  getFooterData() {
    return this._configService.getConfig().footer;
  }
}
