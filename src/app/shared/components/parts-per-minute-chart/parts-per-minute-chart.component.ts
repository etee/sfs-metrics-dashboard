import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsPerMinuteChartComponent } from './parts-per-minute-chart.component.spec';

describe('ProductionChartComponent', () => {
  let component: PartsPerMinuteChartComponent;
  let fixture: ComponentFixture<PartsPerMinuteChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartsPerMinuteChartComponent]
    });
    fixture = TestBed.createComponent(PartsPerMinuteChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
