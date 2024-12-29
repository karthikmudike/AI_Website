
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
    let api = "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";
    if (request.url.includes('openai.com')) {
      modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${api}`
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



}
