import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MasetaComponent } from './componentes/maseta/maseta.component';
import { PlantaComponent } from './componentes/planta/planta.component';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { AlertaService } from './servicios/alerta.service';
import { UsuariosService } from './servicios/usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    MasetaComponent,
    PlantaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule
  ],
  providers: [AlertaService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
