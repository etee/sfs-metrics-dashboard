import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPartsProducedChartComponent } from './total-parts-produced-chart.component';

describe('TotalPartsProducedChartComponent', () => {
  let component: TotalPartsProducedChartComponent;
  let fixture: ComponentFixture<TotalPartsProducedChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalPartsProducedChartComponent]
    });
    fixture = TestBed.createComponent(TotalPartsProducedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
