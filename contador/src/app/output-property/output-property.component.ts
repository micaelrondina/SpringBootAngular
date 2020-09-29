import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {


  @ViewChild('campoInput') campoValorInput: ElementRef;
  @Output() mudouValor = new EventEmitter();
  @Input() valor: number = 0;



  incrementar(){
    //console.log(this.campoValorInput.nativeElement.value);
   // this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementar(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
