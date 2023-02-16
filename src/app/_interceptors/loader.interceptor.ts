import { LoaderService } from './../_services/loader.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MD5 } from 'crypto-js';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const ts = new Date().getTime().toString();
    const credentials = {
      ts: ts,
      apikey: environment.publicKey,
      hash: MD5(ts + environment.privateKey + environment.publicKey).toString(),
    };
    const modifiedRequest = request.clone({
      url: `${environment.baseUrl}${request.url}&${new URLSearchParams(
        credentials
      ).toString()}`,
    });

    return next.handle(modifiedRequest).pipe(
      tap(
        (event) => {
          if (event.type === EVENT_STATUS.IN_PROGRESS) {
            // Start request
            this.loaderService.setStateLoader(true);
          } else if (event.type === EVENT_STATUS.FINISHED) {
            // End request
            this.loaderService.setStateLoader(false);
          }
        },
        (error) => {
          //You can catch the error and show to client
          console.error(error);
        }
      )
    );
  }
}

const EVENT_STATUS = {
  IN_PROGRESS: 0,
  FINISHED: 4,
};
