export interface User {
    uid: string;
    email: string;
    displayName: string;
    emailVerified: boolean;
  }

export interface Usuario {
    uid:string;
    correo: string;
    tipo: string;
    nombre: string;
    apellido: string;
}

export interface Busqueda {
  busqueda:string;
  direccion:string;
  latitude:number;
  longitud:number;
  pais:string;
  uidusuario:string;
 
}
export interface Pais {
  descripcion:string;
  
}