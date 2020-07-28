import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class PagerService {
  constructor() {}

  getPager(totalitems: number, currentPage: number = 1, pageSize: number = 10) {
    // calc totalPages
    let totalpages = Math.ceil(totalitems / pageSize);
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalpages) {
      currentPage = totalpages;
    }
    let startPage: number;
    let endPage: number;
    if (totalpages <= 10) {
      startPage = 1;
      endPage = totalpages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalpages) {
        startPage = totalpages - 9;
        endPage = totalpages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    // calc StartIndex and endIndex
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalitems - 1);

    // create an array of page
    let pages = Array.from(Array(endPage - 1 - startPage).keys()).map(
      (i) => startPage + i
    );
    return {
      totalitems: totalitems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalpages: totalpages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
}
