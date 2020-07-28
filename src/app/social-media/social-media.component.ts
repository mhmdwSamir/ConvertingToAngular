import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../Services/config.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  constructor(private _configService: ConfigService) {}
  socialData;
  ngOnInit(): void {
    this.socialData = this.getSocialData();
  }
  getSocialData() {
    return this._configService.getConfig().socialMedia;
  }
}
