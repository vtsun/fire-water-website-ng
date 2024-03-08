import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPageAComponent } from './partner-page-a.component';

describe('PartnerPageAComponent', () => {
  let component: PartnerPageAComponent;
  let fixture: ComponentFixture<PartnerPageAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerPageAComponent]
    });
    fixture = TestBed.createComponent(PartnerPageAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
