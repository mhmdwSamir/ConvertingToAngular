import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogsData;
  page = 1;
  pageSize = 3;
  constructor(private _configService: ConfigService) {}

  ngOnInit(): void {
    this.blogsData = this.getBlogsData();
    console.log(this.blogsData.blogs.length);
  }
  getBlogsData() {
    return this._configService.getConfig().blogs;
  }
}
