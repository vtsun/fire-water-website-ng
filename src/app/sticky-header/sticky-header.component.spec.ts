import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyHeaderComponent } from './sticky-header.component';

describe('StickyHeaderComponent', () => {
  let component: StickyHeaderComponent;
  let fixture: ComponentFixture<StickyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StickyHeaderComponent]
    });
    fixture = TestBed.createComponent(StickyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
