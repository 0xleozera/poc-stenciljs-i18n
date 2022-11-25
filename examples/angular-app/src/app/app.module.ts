import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

import { ComponentLibraryModule } from 'component-library-angular'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentLibraryModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
