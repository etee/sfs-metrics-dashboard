import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevicesComponent } from './components/devices/devices.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TotalPartsProducedChartComponent } from 'src/app/shared/components/total-parts-produced-chart/total-parts-produced-chart.component';
import { OrderProductionProgressComponent } from 'src/app/shared/components/order-production-progress/order-production-progress.component';
import { ProductionInterruptsComponent } from 'src/app/shared/components/production-interrupts/production-interrupts.component';
import { PartsPerMinuteChartComponent } from 'src/app/shared/components/parts-per-minute-chart/parts-per-minute-chart.component.spec';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DashboardComponent, DevicesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    PartsPerMinuteChartComponent,
    TotalPartsProducedChartComponent,
    OrderProductionProgressComponent,
    ProductionInterruptsComponent,
    TranslateModule
  ],
})
export class DashboardModule {}
