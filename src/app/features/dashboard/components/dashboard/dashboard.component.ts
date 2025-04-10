import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DevicesService, OrderDetail } from 'src/app/core/services/devices.service';
import { InterruptEvent } from 'src/app/shared/components/production-interrupts/production-interrupts.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy{
  selectedDevice: number | undefined;
  deviceEvent: any;
  history: { timestamp: Date; partsPerMin: number; }[] = [];
  cumulativeParts: number = 0;
  totalProducedHistory: { timestamp: Date; totalProduced: number }[] = [];
  productionState: number = 0; 
  productionTarget: number = 0;
  interrupts: InterruptEvent[] = [];
  toggleView: boolean = false;

  private deviceEventsSubscription: Subscription = new Subscription();

  constructor(private devicesService: DevicesService) {}

  onDeviceSelected(device: number) {
    this.selectedDevice = device;
    console.log(this.selectedDevice);

    this.history = [];
    this.totalProducedHistory = [];
    this.cumulativeParts = 0;

    if (this.deviceEventsSubscription) {
      this.deviceEventsSubscription.unsubscribe();
      this.deviceEventsSubscription = new Subscription(); // Reset the composite subscription
    }

    const deviceEventsSub = this.devicesService.getDeviceEvents(device).subscribe({
      next: (data) => {
        this.deviceEvent = data;
        const partsPerMin = data.partsPerMinute;
        const timestamp = new Date(data.timestamp);
        
        this.cumulativeParts += Math.floor(partsPerMin);
        this.history = [...this.history, { timestamp, partsPerMin }];
        this.totalProducedHistory = [...this.totalProducedHistory, { timestamp, totalProduced: this.cumulativeParts }];

        if (this.deviceEvent.status === 'stopped' || this.deviceEvent.status === 'maintenance') {
          this.interrupts.unshift({
            timestamp: this.deviceEvent.timestamp,
            status: this.deviceEvent.status,
            deviceId: this.deviceEvent.deviceId
          });
    
          // Optional: Limit to latest 10 interrupts
          this.interrupts = this.interrupts.slice(0, 10);
        }
      },
      error: (error) => {
        console.error('Error fetching device events:', error);
      }
    });

    this.deviceEventsSubscription.add(deviceEventsSub);
  }

  onOrderClick(orderId: string): void {
    this.toggleView = true;
    this.productionTarget = 0;
    this.productionState = 0;
    const orderDetailsSub = this.devicesService.getOrderDetails(orderId).subscribe((order: OrderDetail) => {
      this.productionTarget = order.productionTarget;
      this.productionState = order.productionState;
      console.log('Production Target:', this.productionTarget);
      console.log('Production State:', this.productionState);
    });

    this.deviceEventsSubscription.add(orderDetailsSub);
  }

  ngOnDestroy(): void {
    if (this.deviceEventsSubscription) {
      this.deviceEventsSubscription.unsubscribe();
    }
  }
}
