import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'contador';


  destruirCiclo:boolean = false;


  numero: number = 3;

  destruir(){
    this.destruirCiclo = true;
  }

  incrementar(){
    return this.numero++;
  }


}







