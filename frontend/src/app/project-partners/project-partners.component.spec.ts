import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPartnersComponent } from './project-partners.component';

describe('ProjectPartnersComponent', () => {
  let component: ProjectPartnersComponent;
  let fixture: ComponentFixture<ProjectPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPartnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
