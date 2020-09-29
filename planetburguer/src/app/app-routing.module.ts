import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { CardapioComponent } from './views/cardapio/cardapio.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
   {path: 'cardapio', component: CardapioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
