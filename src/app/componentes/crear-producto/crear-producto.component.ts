import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  createProducto: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    ) {
    this.createProducto = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  agregarProucto() {
    this.submitted = true;
    if (this.createProducto.invalid){
      return;
    }
    const producto: any = {
      nombre: this.createProducto.value.nombre,
      precio: this.createProducto.value.precio,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date( )
    }
  }
}
