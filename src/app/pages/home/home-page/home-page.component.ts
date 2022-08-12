import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicios/alerta.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  items:any=[];
  usuarios=this.servicioUsuario.getUsers()
  adminVisible:boolean=false
	responsiveOptions:any[]=[];
  constructor(private miServicio:AlertaService, private servicioUsuario:UsuariosService){

  }
   mostrar(){
    this.miServicio.mostrarAlerta("estoy siendo llamado desde appcomponents")
   }
   verificarUsuario(){
    let losUsuarios= this.usuarios;
    losUsuarios.forEach(usuario =>{
      if(usuario.nombreUsuario==="Jose"){
        if(usuario.contrasena==="423"){
          this.adminVisible=true
          alert("Inicio sesion correctamente")
          this.ngOnInit()
        }
      }
    })
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
            routerLink:"Admin",
            visible:this.adminVisible
        }
    ];

        
    }
}
