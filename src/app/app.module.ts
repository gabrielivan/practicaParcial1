import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BotonComponent } from './componentes/boton/boton.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
 
@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    ListaComponent,
    AdminComponent,
    ProductoComponent,
    MostrarComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }