import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class modalAuthService {
    private _registerOn = new BehaviorSubject(false);
    public registerOn$ = this._registerOn.asObservable();
    
    toggle() {
      this._registerOn.next(!this._registerOn.value);
    }
}
