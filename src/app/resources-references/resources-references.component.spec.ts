import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesReferencesComponent } from './resources-references.component';

describe('ResourcesReferencesComponent', () => {
  let component: ResourcesReferencesComponent;
  let fixture: ComponentFixture<ResourcesReferencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesReferencesComponent]
    });
    fixture = TestBed.createComponent(ResourcesReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
