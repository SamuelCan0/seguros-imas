import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path:'inicio',component: InicioComponent},
  {path:'services',component:ServiciosComponent},
  {path:'services/:id',component:DetailComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'**',redirectTo:'inicio',pathMatch:'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
