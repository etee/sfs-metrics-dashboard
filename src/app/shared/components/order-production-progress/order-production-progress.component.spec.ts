import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductionProgressComponent } from './order-production-progress.component';

describe('OrderProductionProgressComponent', () => {
  let component: OrderProductionProgressComponent;
  let fixture: ComponentFixture<OrderProductionProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderProductionProgressComponent]
    });
    fixture = TestBed.createComponent(OrderProductionProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
