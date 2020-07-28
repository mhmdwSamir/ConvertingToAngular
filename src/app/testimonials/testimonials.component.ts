import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  constructor(private _configService: ConfigService) {}

  testimonilasData;
  ngOnInit(): void {
    this.testimonilasData = this.getTestimaonilasData();
  }
  getTestimaonilasData() {
    return this._configService.getConfig().testimonails;
  }
}
