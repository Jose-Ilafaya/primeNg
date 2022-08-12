import { Component, OnInit } from '@angular/core';
import { AlertaService } from 'src/app/servicios/alerta.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  constructor(private miServicio:AlertaService) { }

  ngOnInit(): void {
  
  }
  lanzarDialogo(){
    this.miServicio.mostrarAlerta('Estoy haciendo un llamado desde la planta')
  }
}
