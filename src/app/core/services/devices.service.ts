import { HttpClient } from "@angular/common/http";
import { Injectable, NgZone } from "@angular/core";
import { catchError, Observable, Subject, throwError } from "rxjs";
import { environment } from "src/environments/environment";

export interface DeviceEvent {
    timestamp: string;
    status: string;
    partsPerMinute: number;
    order: number;
}

export interface OrderDetail {
    productionTarget: number;
    productionState: number;
}

@Injectable({
    providedIn: 'root'
})

export class DevicesService {
    
    constructor(private http: HttpClient, private ngZone: NgZone) {

    }

    getDevices(): Observable<number []> {
        return this.http.get<number []>(`${environment.apiBaseUrl}/devices`)
            .pipe(
                catchError((error) => {
                    console.error("Error fetching devices", error);
                    return throwError(() => new Error("Error fetching devices"));
                })
            );
    }

    getDeviceEvents(deviceId: number): Observable<DeviceEvent> {
        const eventSubject = new Subject<DeviceEvent>();
        const eventSource = new EventSource(`${environment.apiBaseUrl}/events/${deviceId}`);
        eventSource.onmessage = (event) => {
            this.ngZone.run(() => {
                try {
                    const data: DeviceEvent = JSON.parse(event.data);
                    eventSubject.next(data);
                } catch(error) {
                    console.error('Failed to parse event data', error);
                }
            });
        };
        eventSource.onerror = (error) => {
            console.error('SSE connection error:', error);
            eventSource.close();
            eventSubject.error('Device event stream disconnected.');
        };
        return eventSubject.asObservable();
    }   
    
    getOrderDetails(orderId: string): Observable<OrderDetail> {
        return this.http.get<{ productionTarget: number; productionState: number }>(
          `${environment.apiBaseUrl}/order/${orderId}`
        );
    }
}