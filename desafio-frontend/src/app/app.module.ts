import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'
import { HomeComponent } from './views/home/home.component';
import { EmpresaCrudComponent } from './views/empresa-crud/empresa-crud.component';
import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { EmpresaReadComponent } from './components/empresa/empresa-read/empresa-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'

import localePt from '@angular/common/locales/pt'
import {registerLocaleData} from '@angular/common';
import { EmpresaUpdateComponent } from './components/empresa/empresa-update/empresa-update.component';
import { EmpresaDeleteComponent } from './components/empresa/empresa-delete/empresa-delete.component';

import { FornecedorReadComponent } from './components/fornecedor/fornecedor-read/fornecedor-read.component';
import { FornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EmpresaCrudComponent,
    FornecedorCrudComponent,
    EmpresaCreateComponent,
    EmpresaReadComponent,
    EmpresaUpdateComponent,
    EmpresaDeleteComponent,
    FornecedorCreateComponent,
    FornecedorReadComponent,
    FornecedorUpdateComponent,
    FornecedorDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
