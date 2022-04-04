import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente, Producto, Factura, FacturaDetalle, Respuesta } from 'src/app/shared/models/model';
import { FacturaService } from 'src/app/shared/services/factura.service';
import notify from 'devextreme/ui/notify';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})

export class FacturaComponent implements OnInit {

  public myfactura: Factura | any;
  public myDetalles: FacturaDetalle[] | any;
  public listaClientes: Cliente[] | any;
  public listaProductos: Producto[] | any;

  public detalle: FacturaDetalle | any;
  currentValue: Date = new Date();


  constructor(private ApiFactura: FacturaService) {
    this.currentValue = new Date();

    //LLamado al servicio para obtener clientes
    this.ApiFactura.getClientes().subscribe((res: Respuesta) => {
      this.listaClientes = res.data;
    });

    //LLamado al servicio para obtener productos
    this.ApiFactura.getProductos().subscribe((res: Respuesta) => {
      this.listaProductos = res.data;
    });

    this.resetForm();
  }

  //#region Eventos

  onClienteChange(e: any) {
    /*Evento al seleccionar un cliente */
    if (e.value === null) {
      e.component.option("value", '');
    }
    if (e.value > 0) {
      this.myfactura.idCliente = e.value;
    }
  }

  onProductoChange(e: any) {
    /*Evento al seleccionar un producto */
    if (e.value === null) {
      this.inicializarDetalle();     
      e.component.option("value", '');
    }
    else if (e.value > 0) {
      this.detalle.idProducto = e.value;
      this.detalle.nombre = (this.listaProductos.find((x: Producto) => x.id == this.detalle.idProducto).nombre) || '';
      let valor: string = (this.listaProductos.find((x: Producto) => x.id == this.detalle.idProducto).precioVenta) || 0
      this.detalle.valorUnitario = parseFloat(valor.replace(',', '.')).toFixed(2);
      this.detalle.cantidad = 1;      
    }
  }

  AddDetalle = function (e: any) {
    /*evento del boton para Adicionar un producto a la lista */
    this.detalle.valorTotal = this.detalle.cantidad * this.detalle.valorUnitario;
    this.myDetalles.push(this.detalle);

    this.Totalizar();
    this.inicializarDetalle();

    e.preventDefault();
  };

  facturar = function (e: any) {
    /* evento del boton Guardar */
    let ctrl: boolean;

    //validar controles
    if (this.validarControles()) {

      //organizar los detalles
      this.myDetalles.map((item: FacturaDetalle) => { item.valorUnitario = parseFloat(item.valorUnitario.toString()) });
      this.myfactura.Detalles = this.myDetalles;

      //LLamado al servicio de guardar factura
      this.ApiFactura.addFactura(this.myfactura).subscribe((res: Respuesta) => {
        console.log(typeof(res.exito))
        ctrl = res.exito == 1 ? true : false ;
        console.log(ctrl);
        this.Mensaje(res.mensaje, ctrl);
        if (ctrl) {
          this.resetForm();
        }
      });
    }
  };

  //#endregion Eventos

  //#region Funciones

  private resetForm = function (): void {
    /* limpiar todo el formulario */
    this.myfactura = { fecha: this.currentValue, idCliente: 0, totalVenta: 0 };
    this.myDetalles = [];
    this.inicializarDetalle();

  }

  private inicializarDetalle = function (): void {
     /*limpiar el objeto de detalles */
    this.detalle = { idProducto: 0, cantidad: 0, valorUnitario: 0, valorTotal: 0, nombre: '' };

  }

  private Totalizar = function (): void {
     /*totalizar los detalles */
    let subtotal: number = 0;
    subtotal = this.myDetalles.reduce((sum: number, item: FacturaDetalle) => sum + item.valorTotal, 0);
    this.myfactura.totalVenta = subtotal;
  }

  validarControles(): boolean {
     /*funcion para validar controles*/
     console.log(this.myDetalles);
    let validacion: string;
    let resp: boolean = true;
    if (this.myfactura.idCliente == 0) {
      validacion = "Falta seleccionar el cliente";
      resp = false;
    }
    else if (this.myfactura.totalVenta == 0) 
    {
      validacion = "No hay productos agregados";
      resp = false;
    }
    if (!resp)
      this.Mensaje(validacion, resp);

    return resp;
  }

  
  private Mensaje(mensaje: string, estado: boolean) {
    /*funcion para mostrar mensajes en pantalla */
    notify({
      message: mensaje,
      position: {
        my: 'center top',
        at: 'center right',
      },
    }, estado ? 'success' : 'error',
      3000);
  }

  //#endregion Funciones

  ngOnInit(): void {
  }

}
