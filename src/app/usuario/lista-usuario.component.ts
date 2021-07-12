import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Marca } from '../interface/marca';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  marcas: Marca[]=[];
  today: number = Date.now();


  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router
    ) {}

  ngOnInit(){
    this.cargarUsuarios();
  }

  

  cargarUsuarios(): void{
    this.usuarioService.obtenerUsuarios().subscribe(
      data =>{
        this.usuarios=data;
        console.log(data);
      },
      err =>{
        console.log(err);
      }
    )
  }

  

  delete(id: any ){
      const a=this.usuarioService.delete(id).subscribe(
         data=>{
           this.toastr.success('no se pudo eliminar','Falló',{
             timeOut: 3000,positionClass:'toast-top-center'});
         },
         err=>{
          console.log("alejo borra");
          this.toastr.success('Eliminado','OK',{
            timeOut: 3000,positionClass:'toast-top-center'});
            this.cargarUsuarios();
         }
      );
      
      
  }

}
