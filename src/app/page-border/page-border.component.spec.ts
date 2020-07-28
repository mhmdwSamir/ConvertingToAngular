import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBorderComponent } from './page-border.component';

describe('PageBorderComponent', () => {
  let component: PageBorderComponent;
  let fixture: ComponentFixture<PageBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
