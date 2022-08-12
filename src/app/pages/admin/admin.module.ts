import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ComponentesAdminModule } from 'src/app/componentes-admin/componentes-admin.module';


@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentesAdminModule
  ]
})
export class AdminModule { }
