import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ProductoComponent } from './component/producto/producto.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavBarComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
