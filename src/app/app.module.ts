import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RippleModule } from 'primeng/ripple';
import { HeaderInterceptor } from './shared/services/httpInterceptor';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SocketService } from './shared/services/http/socket.service';

const socketConfig: SocketIoConfig = { url: `${environment.api}`, options: {} };
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RippleModule,
    ToastModule,
    SocketIoModule
    // .forRoot(socketConfig)
  ],
  providers: [
    MessageService,
    TranslateService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
