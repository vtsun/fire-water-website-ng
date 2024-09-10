import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesEventsComponent } from './resources-events.component';

describe('ResourcesEventsComponent', () => {
  let component: ResourcesEventsComponent;
  let fixture: ComponentFixture<ResourcesEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesEventsComponent]
    });
    fixture = TestBed.createComponent(ResourcesEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
