import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../Services/config.service';
import { PagerService } from '../Services/pager.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogsData;
  pageSize = 3;
  allItems: any[];
  pages: any[];
  pager: any = {};
  constructor(
    private _configService: ConfigService,
    private _pagerService: PagerService
  ) {}

  ngOnInit(): void {
    this.blogsData = this.getBlogsData();
    this.allItems = this.blogsData.blogs;
    this.setPage(1);
  }
  getBlogsData() {
    return this._configService.getConfig().blogs;
  }
  setPage(pageNumber: number) {
    // create pager using pagerService
    this.pager = this._pagerService.getPager(
      this.allItems.length,
      pageNumber,
      this.pageSize
    );
    console.log(this.pager.pages);
    // current page blogs
    this.pages = this.allItems.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
}
