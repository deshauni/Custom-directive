import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppChBgColorDirective } from '../app-ch-bg-color.directive';

import { AppComponent } from './app.component';
   // Add an import to the component pointing to the place where it was created

@NgModule({
  imports:      [
    BrowserModule,
    NgbModule.forRoot(),
    ],
  declarations: [
    AppComponent,
    AppChBgColorDirective
            // Add the components name to the module declarations
    ],
  bootstrap: [
    AppComponent
    ]
})

export class AppModule { }
