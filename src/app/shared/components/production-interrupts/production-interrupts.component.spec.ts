import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionInterruptsComponent } from './production-interrupts.component';

describe('ProductionInterruptsComponent', () => {
  let component: ProductionInterruptsComponent;
  let fixture: ComponentFixture<ProductionInterruptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionInterruptsComponent]
    });
    fixture = TestBed.createComponent(ProductionInterruptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
