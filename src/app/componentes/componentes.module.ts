import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasetaComponent } from './maseta/maseta.component';
import { PlantaComponent } from './planta/planta.component';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    MasetaComponent,
    PlantaComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[
    MasetaComponent,
    PlantaComponent
  ]
})
export class ComponentesModule { }
