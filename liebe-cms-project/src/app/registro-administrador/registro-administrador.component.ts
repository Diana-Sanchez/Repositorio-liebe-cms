import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-administrador',
  templateUrl: './registro-administrador.component.html',
  styleUrls: ['./registro-administrador.component.css']
})
export class RegistroAdministradorComponent implements OnInit {
  // Creando instancia del tipo FormGroup
  registrosUsuarios = new FormGroup({
    nombreProyecto:new FormControl('', [Validators.required, Validators.maxLength(15)]),
    descripcionProyecto:new FormControl('', [Validators.required, Validators.maxLength(20)]),
    correo:new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]),
    nombreUsuario:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required]),
    confirmarPassword:new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }
  get nombreProyecto(){
    return this.registrosUsuarios.get('nombreProyecto');
  };

  get descripcionProyecto(){
    return this.registrosUsuarios.get('descripcionProyecto');
  };
  guardarRegistroUsuario(){
    console.log(this.registrosUsuarios.value);
    console.log('Fomulario válido:', this.registrosUsuarios.valid )
  };

}