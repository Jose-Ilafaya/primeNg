import { Component, ViewEncapsulation } from '@angular/core';
import { AlertaService } from './servicios/alerta.service';
import {MenuItem} from 'primeng/api';
import { UsuariosService } from './servicios/usuarios.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'primeNg';
  items:any=[];
  usuarios:any=this.servicioUsuario.getUsers()

	responsiveOptions:any[]=[];
  constructor(private miServicio:AlertaService, private servicioUsuario:UsuariosService){

  }
   mostrar(){
    this.miServicio.mostrarAlerta("estoy siendo llamado desde appcomponents")
   }
    ngOnInit() {
      console.log(this.usuarios)
      this.items = [
        {
            label: 'Home',
           icon:'pi pi home'
        },
        {
            label: 'Admin',
            icon: 'pi pi-user-plus',
            visible:false
        }
    ];

        
    }
}
