import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioTemplateComponent } from './components/formulario-template/formulario-template.component';
import { FormularioReactiveComponent } from './components/formulario-reactive/formulario-reactive.component';

const routes: Routes = [
  {path: 'template', component:FormularioTemplateComponent},
  {path: 'reactive', component:FormularioReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
