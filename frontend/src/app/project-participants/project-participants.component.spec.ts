import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectParticipantsComponent } from './project-participants.component';

describe('ProjectParticipantsComponent', () => {
  let component: ProjectParticipantsComponent;
  let fixture: ComponentFixture<ProjectParticipantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectParticipantsComponent]
    });
    fixture = TestBed.createComponent(ProjectParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
