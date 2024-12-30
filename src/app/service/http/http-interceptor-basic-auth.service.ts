
import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basicAuthentication.service';
import { environment } from '../../../environments/environments';


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
          Authorization: `Bearer ${environment.apiKey}`
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
