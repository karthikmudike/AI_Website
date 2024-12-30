
import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basicAuthentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuth: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let modifiedRequest = request;
    if (request.url.includes('openai.com')) {
      modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.api()}`
        },
      });
    } else {
      const authHeader = this.basicAuth.getHeader();
      if (authHeader) {
        modifiedRequest = request.clone({
          setHeaders: {
            Authorization: authHeader,
          },
        });
      }
    }

    return next.handle(modifiedRequest);
  }

  private api() {
    let api = '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'; 
    return api;
   }


}
