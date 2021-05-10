import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { ListaMarcaComponent } from './marca/lista-marca.component';



@NgModule({
  declarations: [
    AppComponent, 
    ListaUsuarioComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    DetalleUsuarioComponent,
    ListaMarcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
