import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-tabla-admin',
  templateUrl: './tabla-admin.component.html',
  styleUrls: ['./tabla-admin.component.css']
})
export class TablaAdminComponent implements OnInit {

  constructor(private servicioUsuarios:UsuariosService) {
  }
  losUsuarios = this.servicioUsuarios.getUsers()


  ngOnInit(): void {
  }

}
