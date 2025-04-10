import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-production-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-production-progress.component.html',
  styleUrls: ['./order-production-progress.component.scss']
})
export class OrderProductionProgressComponent {
  @Input() productionTarget = 0;
  @Input() productionState = 0;

  get progress(): number {
    if (this.productionTarget === 0) return 0;
    return Math.min((this.productionState / this.productionTarget) * 100, 100);
  }
}
