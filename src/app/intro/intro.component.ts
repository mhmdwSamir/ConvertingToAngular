import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor(private _configService: ConfigService) {}
  introData;
  ngOnInit(): void {
    this.introData = this.getIntroData();
  }
  getIntroData() {
    return this._configService.getConfig().About;
  }
}
