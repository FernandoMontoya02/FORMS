import { Component } from '@angular/core';

interface persona {
  cedula: string;
  nombre: string;
  fecha: Date;
  ciudad: string;
}

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent {
  person: persona = {
    cedula: "",
    nombre: "",
    fecha: new Date(),
    ciudad: "",
  }

  constructor(){}

  onSubmit(){
    
    console.log(this.person);
    alert("Se inserto una nueva persona. \nConsultar la consola");
  }
}
