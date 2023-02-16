import { ToastService } from './_services/toast.service';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { LoaderService } from './_services/loader.service';
import { MessageService, Message } from 'primeng/api';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'marvel';
  suscriptions: any[] = [];
  stateLoader = false;
  constructor(
    private loaderService: LoaderService,
    private toastService: ToastService,
    private messageService: MessageService
  ) {}

  ngAfterViewInit(): void {
    this.initSuscriptions();
  }

  initSuscriptions() {
    const suscriptionLoader = this.loaderService.listenerLoader().subscribe({
      next: (state: boolean) => {
        setTimeout(() => {
          this.stateLoader = state;
        });
      },
    });
    const suscriptionToast = this.toastService.listenerToast().subscribe({
      next: (toast: Message | null) => {
        setTimeout(() => {
          if (!toast) {
            return;
          }
          this.addSingle(toast);
        });
      },
    });
    this.suscriptions.push([suscriptionLoader, suscriptionToast]);
  }

  ngOnDestroy(): void {
    this.suscriptions.forEach((it) => {
      it.unsuscribe();
    });
  }

  addSingle(toast: Message) {
    this.messageService.add(toast);
  }
}
