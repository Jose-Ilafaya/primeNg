import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { 
    this.usuarios=[
      {nombreUsuario: "maca", contrasena:"123"},
      {nombreUsuario: "iara", contrasena:"023"},
      {nombreUsuario: "Jose", contrasena:"423"}
    ]
  }
  getUsers(){
    return this.usuarios;
  }
  private usuarios:Usuario[]=[]
}
