import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  DxSelectBoxModule,
  DxTextBoxModule,
  DxTemplateModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule
} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import ArrayStore from 'devextreme/data/array_store';

import { FacturacionService } from '../../shared/services/facturacion.service';
import { Factura, FacturaProducto } from '../../models/model';
import { GridModule } from './grid.component';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  templateUrl: 'facturacion.component.html',
  styleUrls: ['facturacion.component.scss'],
})
export class FacturacionComponent {

  public factura: Factura = { id: 0, idCliente: 0, totalVenta: 0, detalle: [] };
  detalles: FacturaProducto[] = [];

  dataClientes: any;
  listaClientes: any;

  dataProductos: any;
  listaProductos: any;

  constructor(private api: FacturacionService) {
  };

  ngOnInit() {
    this.api.getClientes().subscribe(res => {
      this.listaClientes = res
      console.log('Api clientes');
      this.dataClientes = new ArrayStore({
        data: this.listaClientes,
        key: 'id',
      });
    })

    this.api.getProductos().subscribe(res => {
      this.listaProductos = res
      console.log('Api productos');
      this.dataProductos = new ArrayStore({
        data: this.listaProductos,
        key: 'id',
      });
    })
  }

  agregar = function () {

    let myFactura: Factura = { id: 0, idCliente: 1003, totalVenta: 100, detalle: [] };
    myFactura.detalle.push({ id: 0, idFactura: 0, idProducto: 1001, cantidad: 10, valorUnitario: 50, valorTotal: 500 });
    myFactura.detalle.push({ id: 0, idFactura: 0, idProducto: 1003, cantidad: 5, valorUnitario: 200, valorTotal: 1000 });
    console.log(myFactura);
    notify({
      message: 'You have submitted the form',
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, 'success', 3000);
  };
}

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxFormModule,
    GridModule
  ],
  declarations: [FacturacionComponent],
  bootstrap: [FacturacionComponent],
})
export class FacturacionModule { }

platformBrowserDynamic().bootstrapModule(FacturacionModule);
