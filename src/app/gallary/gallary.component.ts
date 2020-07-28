import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss'],
})
export class GallaryComponent implements OnInit {
  gallaryData;
  constructor(private _configService: ConfigService) {}

  ngOnInit(): void {
    this.gallaryData = this.getGallaryData();
    setTimeout(() => {
      console.log(this.gallaryData);
    }, 3000);
  }
  getGallaryData() {
    return this._configService.getConfig().gallery;
  }
}
