import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable()
export class FacturacionService {

    myAppUrl: string;
    myApiClientesUrl='Clientes';
    myApiProductosUrl='Productos';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'
        })
      };

    constructor(private http: HttpClient) {
        this.myAppUrl = environment.appUrl;
    }

    public getClientes(){
        return this.http.get(this.myAppUrl + this.myApiClientesUrl); 
    }

    public getProductos(){
        return this.http.get(this.myAppUrl + this.myApiProductosUrl); 

    }    
}