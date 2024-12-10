import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCrearComponent } from './components/form-crear/form-crear.component';
import { DropzoneDirective } from './directives/dropzone.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormCrearComponent,
    DropzoneDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
