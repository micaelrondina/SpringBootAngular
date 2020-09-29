import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-burguer-dialog',
  templateUrl: './burguer-dialog.component.html',
  styleUrls: ['./burguer-dialog.component.css']
})
export class BurguerDialogComponent implements OnInit {

  public burguerForm: FormGroup;

  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<BurguerDialogComponent>, private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.burguerForm = this.fb.group({
      id:['', Validators.required],
      nome:['', Validators.required]
    })
  }

  cancel(): void {
    this.dialogRef.close();
    this.burguerForm.reset;
}

adicionarCliente(){
  this.clienteService.postCliente(this.burguerForm.value).subscribe(dados => {
    this.burguerForm.reset;
  })
  this.dialogRef.close();
}

}
