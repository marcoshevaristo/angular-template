import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptorProvider } from '../interceptors/http-interceptor';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, HttpClientModule, BrowserModule, BrowserAnimationsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorProvider,
      multi: true,
    },
  ],
})
export class CoreModule {}
