import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../clases/Producto';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Input() listadoProductos: Producto[] ;
  @Output() productoEncontrado: EventEmitter<any>= new EventEmitter<any>(); 

  constructor() { }
  producto: Producto;
  descripcion: String;

  ngOnInit(): void {
  }

  buscar()
  {
    this.producto = null;
    this.listadoProductos.forEach(p => {
      if(p.Descripcion === this.descripcion){
        this.producto = p;
      }
    });
    this.productoEncontrado.emit(this.producto);
  }
}
