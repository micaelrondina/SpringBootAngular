import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './views/about/about.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ClientesService } from './services/clientes.service';
import {MatDialogModule} from '@angular/material/dialog';
import { BurguerDialogComponent } from './views/home/burguer-dialog/burguer-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CursosModule } from './cursos/cursos.module';
import { CardapioModule } from './views/cardapio/cardapio.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BurguerDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule, 
    ReactiveFormsModule,
    MatProgressBarModule,
    CursosModule,
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
