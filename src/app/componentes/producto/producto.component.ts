import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  @Output() SeCreoUnProducto: EventEmitter<any>= new EventEmitter<any>();

  nuevoProducto: Producto;

  constructor() { 

  }

  ngOnInit(): void {

  }
  
  crearProducto()
  {
    let id: number = Math.floor((Math.random() * 1000) + 1);
    this.nuevoProducto.Id = id;
    this.SeCreoUnProducto.emit(this.nuevoProducto);
    this.nuevoProducto = null;
  }

  hacerNuevoProducto()
  {
    this.nuevoProducto = new Producto(0,"n", 0, new Date, "", 0);
  }

}


