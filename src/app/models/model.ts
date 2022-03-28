import { NumberSymbol } from "@angular/common";

export class Cliente {
    id: number = 0;
    tipoDocumento: string = '';
    numeroDocumento: string = '';
    nombre: string = '';
    fechaNacimiento?: Date;
    direccion: string = '';
    telefono: string = '';
}
export class Producto {
    id: number = 0;
    codigo: string = '';
    nombre: string = '';
    estado: boolean = false;
    precioVenta: number = 0;
    existenciaActual: number = 0;
}

export class FacturaProducto {
    id: number = 0;
    idFactura: number = 0;
    idProducto: number = 0;
    cantidad: number = 0;
    valorUnitario: number = 0;
    valorTotal: number = 0;
}

export class Factura {
    id: number = 0;
    fecha?: Date;
    idCliente: number = 0;
    totalVenta: number = 0;
    detalle: FacturaProducto[] = [];

    constructor(){}
}

export class Hero {

    constructor(
      public id: number,
      public name: string,
      public power: string,
      public alterEgo?: string
    ) {  }
  
  }
