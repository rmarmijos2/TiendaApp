export interface Users {
    nombre: string;
    apellido: string;
    genero: string;
    numero: string;
    email: string;
    password: string;
    uid: string;
    perfil: 'Visitante' | 'Admin'
  }

  export interface Product {
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
    foto: string;
    id: string;
  }