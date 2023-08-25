import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpCacheInterceptorModule, useHttpCacheLocalStorage } from '@ngneat/cashew';
import { VmNameValidatorDirective } from './core/directives/vm-name.validator.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VmNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot(),
    FormsModule
  ],
  providers: [useHttpCacheLocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
