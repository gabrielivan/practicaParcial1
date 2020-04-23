import { Component, OnInit } from '@angular/core';
import { Producto } from './../../clases/Producto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ListadoProductosPrincipal: Producto[];
  productoEncontrado: Producto;

  constructor() { 
    this.ListadoProductosPrincipal= [
      // { Id: 1, Descripcion: "Flexible-180x220cm" , Precio: 1000, FechaDeVencimiento: new Date("2020/04/17"), RutaDeFoto: "Descktop.jpg", Tipo:  0},
      // { Id: 2, Descripcion: "Fijo-190x230" , Precio: 2500, FechaDeVencimiento: new Date("2020/04/16"), RutaDeFoto: "Descktop.jpg", Tipo: 1}
    ];
  }

  ngOnInit(): void {
    var auxListado = localStorage.getItem('listado');
    if(auxListado)
    {
      this.ListadoProductosPrincipal = JSON.parse(auxListado);
    }
  }
  
  mostrarProducto(parametroProducto: Producto)
  {
      console.info("producto",parametroProducto);
      this.ListadoProductosPrincipal.push(parametroProducto);
      this.saveChangesInLocalStorage();  }

  tomarProductoParaDetalles(NuevoProducto: Producto)
  {
    this.productoEncontrado = NuevoProducto;   
  }

  borrarProductoSeleccionado(productoABorrar: Producto)
  {
    const index = this.ListadoProductosPrincipal.indexOf(productoABorrar, 0);
    if (index > -1) {
      this.ListadoProductosPrincipal.splice(index, 1);
      this.saveChangesInLocalStorage();
    }
  }

  saveChangesInLocalStorage(){
    localStorage.setItem('listado', JSON.stringify(this.ListadoProductosPrincipal));
  }
}
