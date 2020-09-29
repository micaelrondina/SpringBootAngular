import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CardapioModule } from '../views/cardapio/cardapio.module';



@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule,
    CardapioModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
