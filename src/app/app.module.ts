import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { InputVersosFormComponent } from './input-versos-form/input-versos-form.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    InputVersosFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
