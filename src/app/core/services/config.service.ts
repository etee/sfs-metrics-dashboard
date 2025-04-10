import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { AppConfig } from "src/environments/environment.config";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})

export class ConfigService {
    private configSubject = new BehaviorSubject<AppConfig>(environment);
    config$ = this.configSubject.asObservable();

    constructor(private http: HttpClient) {
        this.loadRuntimeConfig();
    }

    loadRuntimeConfig() {
        this.http.get<AppConfig>(`${environment.apiBaseUrl}${environment.configUrl}`)
            .pipe(
                catchError(() => {
                    console.error("Failed to load runtime config");
                    return of(environment);
                })                                                                                                               
            )
            .subscribe(config => this.configSubject.next(config));
    }

    getConfig(): Observable<AppConfig> {
        return this.config$;
    }
    
}