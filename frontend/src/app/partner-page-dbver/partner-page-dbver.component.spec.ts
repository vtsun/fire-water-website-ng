import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPageDbverComponent } from './partner-page-dbver.component';

describe('PartnerPageDbverComponent', () => {
  let component: PartnerPageDbverComponent;
  let fixture: ComponentFixture<PartnerPageDbverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerPageDbverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnerPageDbverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
