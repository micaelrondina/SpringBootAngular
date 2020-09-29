import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Clientes } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

export interface PeriodicElement {
  nome: string;
  codigo: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, nome: 'Hydrogen'}
];



/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nome',];
  //dataSource = ELEMENT_DATA;
  clientes: Clientes[];
  dataSource: any = null;
  next: boolean = false;


  constructor(private clienteService: ClientesService) { 
  }

  ngOnInit(): void {
  this.clienteService.getCliente().subscribe(dados =>{
    if (dados.length > 0){
      this.clientes = dados
      this.dataSource = new MatTableDataSource(this.clientes);
      console.log(this.clientes)
    }else{
      console.log("ERRO")
    }
    this.next = true;
  }

  );
    
  }

}
