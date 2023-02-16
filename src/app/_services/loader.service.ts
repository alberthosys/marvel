import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loader = new BehaviorSubject<boolean>(false);

  setStateLoader(state: boolean): void {
    this.loader.next(state);
  }

  listenerLoader(): Observable<boolean> {
    return this.loader.asObservable();
  }
}
