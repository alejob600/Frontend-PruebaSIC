import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from '../interface/marca';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-lista-marca',
  templateUrl: './lista-marca.component.html',
  styleUrls: ['./lista-marca.component.css']
})
export class ListaMarcaComponent implements OnInit {

  marcas: Marca[]=[];
  constructor(
    private usuarioService: UsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  
}
