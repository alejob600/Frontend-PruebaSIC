import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  id=0;
  cedula='';
  nombre = '';
  email = '';
  fecha:Number=Date.now();
  comentario='';
  marca='';


  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onCreate(): void{
    const usuario = new Usuario(this.id, this.cedula, 
      this.nombre, this.email,  this.fecha, this.comentario, this.marca);
    this.usuarioService.save(usuario).subscribe(
      data => {
          this.toastr.success('Encuesta Creada', 'OK',{timeOut:3000,positionClass:'toast-top-center'});
          this.router.navigate(['/']);
      }, 
      err =>{
        this.toastr.error(err.error.Message, 'Falló la creación de la encuesta',{timeOut:3000, positionClass:'toast-top-center'});
        this.router.navigate(['/']);
      }
    );

  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
