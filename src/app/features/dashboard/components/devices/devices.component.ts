import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DevicesService } from 'src/app/core/services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit{
  devices$: Observable<number[]> | undefined;
  @Output() deviceSelected = new EventEmitter<number>();
  
  constructor(private devicesService: DevicesService) {}

  ngOnInit() {
    this.devices$ = this.devicesService.getDevices();
  }

  selectedDevice(device: number) {
    this.deviceSelected.emit(device);
  }
}
