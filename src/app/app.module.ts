import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaletteComponent } from './components/palette/palette.component';
import { AffichageComponent } from './components/affichage/affichage.component';

@NgModule({
  declarations: [
    AppComponent,
    PaletteComponent,
    AffichageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
