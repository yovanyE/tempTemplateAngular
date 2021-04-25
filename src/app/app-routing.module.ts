import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './component/inicio/inicio.component';
import { NavBarComponent} from './component/nav-bar/nav-bar.component';
import { ProductoComponent} from './component/producto/producto.component';

const routes: Routes = [
  {path: "",component:InicioComponent},
  {path:"navbar",component:NavBarComponent},
  {path:"productos", component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
