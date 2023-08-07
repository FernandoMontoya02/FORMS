import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css']
})
export class FormularioReactiveComponent {
  persona: FormGroup;
  
  constructor() {
    this.persona = new FormGroup({
      cedula: new FormControl("", Validators.required),
      nombre: new FormControl("", Validators.required),
      fechaN: new FormControl("", Validators.required),
      ciudad: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    console.log(this.persona.value);
    alert("Se inserto una nueva persona. \nConsultar la consola");
  }
}
