import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsModelsComponent } from './products-models.component';

describe('ProductsModelsComponent', () => {
  let component: ProductsModelsComponent;
  let fixture: ComponentFixture<ProductsModelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsModelsComponent]
    });
    fixture = TestBed.createComponent(ProductsModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
