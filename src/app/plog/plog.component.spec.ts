import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlogComponent } from './plog.component';

describe('PlogComponent', () => {
  let component: PlogComponent;
  let fixture: ComponentFixture<PlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
