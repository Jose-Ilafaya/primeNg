import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent,
    loadChildren:()=> import(`./pages/home/home.module`).then(m => m.HomeModule)
  }
/*,
  {
    path:'**',
    component:HomeComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: "top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
