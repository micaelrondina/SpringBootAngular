import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { Cliente } from 'src/app/shared/model/cliente.model';

@Component({
  selector: 'app-burguer-list',
  templateUrl: './burguer-list.component.html',
  styleUrls: ['./burguer-list.component.css']
})
export class BurguerListComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

 
 
  d = new Date();
  clientes: Cliente[];
  heroes = ['Windstorm', this.d, 'Magneta', 'Tornado'];

  myObj = [{
    "id": 28,
    "Title": "Sweden",
    "date" : this.d
  }, {
    "id": 56,
    "Title": "USA",
    "date" : this.d
  }, {
    "id": 89,
    "Title": "England",
    "date" : this.d
  }];
  array: any[];



  ngOnInit(): void {

    console.log(this.d);

    this.clienteService.getCliente().subscribe(dados => this.clientes = dados);
  }

  }

