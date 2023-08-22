import { EmpresaDeleteComponent } from './components/empresa/empresa-delete/empresa-delete.component';
import { EmpresaUpdateComponent } from './components/empresa/empresa-update/empresa-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { EmpresaCrudComponent } from './views/empresa-crud/empresa-crud.component'
import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
  path:"empresa",
  component: EmpresaCrudComponent
  },
  {
    path:"empresa/create",
    component: EmpresaCreateComponent
  },
  {
    path:"empresa/update/:id",
    component: EmpresaUpdateComponent
  },
  {
    path:"empresa/delete/:id",
    component: EmpresaDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
