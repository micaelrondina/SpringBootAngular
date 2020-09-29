import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 23;
  constructor() { }

  onMudouValor(event){
    console.log(event.novoValor);
  }

  ngOnInit(): void {
  }


  

}
