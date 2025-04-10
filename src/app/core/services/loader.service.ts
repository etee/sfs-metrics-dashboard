import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
    private _isLoading = new BehaviorSubject<boolean>(false);
    readonly isLoading$: Observable<boolean> = this._isLoading.asObservable();

  show(): void {
    this._isLoading.next(true);
  }

  hide(): void {
    this._isLoading.next(false);
  }
}
