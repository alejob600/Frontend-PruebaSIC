import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../interface/marca';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioURL= 'http://localhost:8080/'
  private api='https://jsonplaceholder.typicode.com'
  
  constructor(
    private httpClient: HttpClient
    ) {}


 

  public obtenerUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.usuarioURL + 'usuario');
  }

  public save(usuario: Usuario ): Observable<any>{
    console.log(usuario);
    return this.httpClient.post<any>(this.usuarioURL +'usuario', usuario);
  }

  public delete(id:any): Observable<any>{
    return this.httpClient.delete(this.usuarioURL+'usuario/'+id);
  }

  public obtenerMarca(): Observable<Marca[]>{
    return this.httpClient.get<Marca[]>(this.usuarioURL + 'marca');
  }
}
