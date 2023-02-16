import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toast = new BehaviorSubject<Message | null>(null);
  private setToast(toast: Message): void {
    this.toast.next(toast);
  }
  listenerToast(): Observable<Message | null> {
    return this.toast.asObservable();
  }

  success(title: string, message: string) {
    const params: Message = {
      severity: 'success',
      summary: title,
      detail: message,
    };
    this.setToast(params);
  }
}
