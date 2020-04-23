export class Producto {

    Id : number;
    Descripcion : string;
    Precio : number;
    FechaDeVencimiento : Date;
    RutaDeFoto : string;
    Tipo : Tipo;
  
    public constructor(id: number, descripcion: string, precio: number, fechaDeVencimiento: Date, rutaDeFoto: string, tipo: Tipo) { 
  
    }
    
}

enum Tipo {
    Liquido,
    Solido
  }