import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesPublicationsComponent } from './resources-publications.component';

describe('ResourcesPublicationsComponent', () => {
  let component: ResourcesPublicationsComponent;
  let fixture: ComponentFixture<ResourcesPublicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesPublicationsComponent]
    });
    fixture = TestBed.createComponent(ResourcesPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
