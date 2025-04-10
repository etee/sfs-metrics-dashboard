import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface InterruptEvent {
  timestamp: number;
  status: 'stopped' | 'maintenance';
  deviceId: string;
}

@Component({
  selector: 'app-production-interrupts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './production-interrupts.component.html',
  styleUrls: ['./production-interrupts.component.scss']
})
export class ProductionInterruptsComponent {
  @Input() interrupts: InterruptEvent[] = [];

  formatTime(ms: number): string {
    return new Date(ms).toLocaleTimeString();
  }
}
