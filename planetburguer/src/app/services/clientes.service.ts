import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clientes } from '../models/cliente';

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class ClientesService {


  


  clientes: Clientes[];

  private readonly API = environment.API;

  constructor(private http: HttpClient) {}

    public getCliente(): Observable<Clientes[]>{
      return this.http.get<Clientes[]>(this.API + 'cliente', );
    }


    public postCliente(cliente: Clientes): Observable<Clientes>{
      return this.http.post<Clientes>(this.API + 'cliente', cliente, httpHeaders);
    }
 

}
