import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})


export class ClienteService {

 
  constructor(private http: HttpClient) { }

  private readonly API = `${environment.API}`;
  

  getCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.API+'cliente');
  }

}
