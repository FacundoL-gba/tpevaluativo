import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form: any;

  constructor() { 
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      domicilio: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      comentario: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value)
    }
    else{
      alert("TODOS LOS CAMPOS SON OBLIGATORIOS")
    }
  }

}
