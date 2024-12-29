import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service';



export const appConfig: ApplicationConfig = {
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true},
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi(), withFetch())  // Ensure that HttpClient is provided correctly
  ]
};


// import { ApplicationConfig } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
// import { importProvidersFrom } from '@angular/core';

// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';// Add in this step
// import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';// Add in this step

// export const appConfig: ApplicationConfig = {
//     providers: [importProvidersFrom(BrowserModule, AppRoutingModule, FormsModule),
//     { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true },// Add in this step
//     provideHttpClient(withInterceptorsFromDi())] // Add in this step
// };