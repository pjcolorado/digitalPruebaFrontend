export interface Respuesta{
    exito: number;
    mensaje: string;
    data: any;
}

export interface Cliente {
    id: number;
    tipoDocumento: string;
    numeroDocumento: string;
    nombre: string;
    fechaNacimiento?: Date;
    direccion: string;
    telefono: string;
}
export interface Producto {
    id: number;
    codigo: string;
    nombre: string;
    estado: boolean;
    precioVenta: number;
    existenciaActual: number;
}
export interface Factura {
    idCliente: number;
    fecha: Date;
    totalVenta: number;
    detalles: FacturaDetalle[];
}

export interface FacturaDetalle {
    idFactura: number;
    idProducto: number;
    nombre?: string;
    cantidad: number;
    valorUnitario: number;
    valorTotal: number;
}


