import { EmpresaDeleteComponent } from './components/empresa/empresa-delete/empresa-delete.component';
import { EmpresaUpdateComponent } from './components/empresa/empresa-update/empresa-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { EmpresaCrudComponent } from './views/empresa-crud/empresa-crud.component';
import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';

import { FornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';


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
  },
  {
    path:"fornecedor",
    component: FornecedorCrudComponent
  },
  {
    path:"fornecedor/create",
    component: FornecedorCreateComponent
  },
  {
    path:"fornecedor/update/:id",
    component: FornecedorUpdateComponent
  },
  {
    path:"fornecedor/delete/:id",
    component: FornecedorDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
