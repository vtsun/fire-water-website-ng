import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesExternalLinksComponent } from './resources-external-links.component';

describe('ResourcesExternalLinksComponent', () => {
  let component: ResourcesExternalLinksComponent;
  let fixture: ComponentFixture<ResourcesExternalLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesExternalLinksComponent]
    });
    fixture = TestBed.createComponent(ResourcesExternalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
