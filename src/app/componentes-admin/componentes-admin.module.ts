import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaAdminComponent } from './tabla-admin/tabla-admin.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    TablaAdminComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ],
  exports:[
    TablaAdminComponent
  ]
})
export class ComponentesAdminModule { }
