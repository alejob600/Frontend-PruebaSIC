export class Usuario {
    id?: Number;
    cedula:string;
    nombre:string;
    email:string;
    fecha:Number;
    marca:String;
    comentario:string;
    
    
    constructor(id: number, cedula:string, nombre:string, email:string, fecha:Number, comentario:string, marca:string){
        this.id=id;
        this.nombre = nombre;
        this.cedula = cedula;
        this.comentario=comentario;
        this.email=email;
        this.fecha=fecha;
        this.comentario=comentario;
        this.marca=marca;
    }
}

