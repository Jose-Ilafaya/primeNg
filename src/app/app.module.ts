import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { AlertaService } from './servicios/alerta.service';
import { UsuariosService } from './servicios/usuarios.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    AppRoutingModule
  ],
  providers: [AlertaService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
