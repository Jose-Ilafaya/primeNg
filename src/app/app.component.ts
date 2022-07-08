import { Component, ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  mostrar(){
    this.display=true;
  }
  title = 'primeNg';
  display:boolean=false;
  items: MenuItem[]=[];
  cachorro:string[]=[
    "https://cdn.shopify.com/s/files/1/0248/4692/5912/articles/1519305023-0-0_4deff7f8-587a-4500-9aef-ca5063e27da1_1024x1024.jpg?v=1567518338",
    "http://cdn.shopify.com/s/files/1/0560/3241/files/8165539512_cd5c25de26_h_grande.jpg?2227402961487937639",
    "https://www.erapetfood.com/wp-content/uploads/2021/10/cachorro-corriendo_2.jpg",
    "https://www.erapetfood.com/wp-content/uploads/2021/10/cachorro-corriendo_2.jpg"
  ];
	responsiveOptions:any[]=[];
  constructor(){
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon:'pi pi-home'
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];
        
    }
}
