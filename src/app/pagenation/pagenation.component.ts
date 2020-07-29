import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PagerService } from '../Services/pager.service';

@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.scss'],
})
export class PagenationComponent implements OnInit {
  @Input() pager;
  @Output() setPage: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _pagerService: PagerService) {}

  ngOnInit(): void {}
  setCurrentPage(pageNumber: number) {
    this.setPage.emit(pageNumber);
  }
}
