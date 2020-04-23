import { Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
import { Producto } from './../../clases/Producto';

@Component({
  selector: '[app-boton]',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input()  producto: Producto;
  @Output() productoSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 
    constructor() { }
  
    ngOnInit() {
    }
    emitir()
    {
      this.productoSeleccionado.emit(this.producto);
    }
  }
