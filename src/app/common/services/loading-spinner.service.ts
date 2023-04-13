import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingSpinnerService {
  private _isLoading$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  getLoading = (): Observable<boolean> => {
    return this._isLoading$.asObservable();
  };

  setLoading = (isLoading: boolean): void => {
    this._isLoading$.next(isLoading);
  };
}
