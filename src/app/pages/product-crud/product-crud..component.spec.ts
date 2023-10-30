import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCrudComponent } from './product-crud..component';

describe('ProductsComponent', () => {
  let component: ProductCrudComponent;
  let fixture: ComponentFixture<ProductCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCrudComponent]
    });
    fixture = TestBed.createComponent(ProductCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
