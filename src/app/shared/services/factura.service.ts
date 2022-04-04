import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Factura, Respuesta } from '../models/model';

@Injectable()
export class FacturaService {

    myApiUrl: string = "http://localhost:9761/";
    myApiClientesUrl = 'Clientes';
    myApiProductosUrl = 'Productos';
    myApiFacturaUrl = 'Facturas';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
        })
    };

    constructor(private http: HttpClient) {}

    public getClientes(): Observable<Respuesta> {
        return this.http.get<Respuesta>(this.myApiUrl + this.myApiClientesUrl);
    }

    public getProductos(): Observable<Respuesta> {
        return this.http.get<Respuesta>(this.myApiUrl + this.myApiProductosUrl);
    }

    public addFactura(factura: Factura): Observable<Respuesta>{
        return this.http.post<Respuesta>(this.myApiUrl + this.myApiFacturaUrl, factura, this.httpOptions);
    }
}