import { Fornecedor } from './../fornecedor.model';
import { Router } from '@angular/router';
import { FornecedorService } from './../fornecedor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedor : Fornecedor = {
    name: '',
    email: null,
    cnpj: null,
    cep: null,
  }

  constructor(private fornecedorService: FornecedorService, private router: Router) { }

  ngOnInit(): void {
  
  }

  createFornecedor(): void {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMensage('Fornecedor registrado com sucesso')
      this.router.navigate(['/fornecedor'])
    })
  }

  cancel(): void {
    this.router.navigate(['/fornecedor'])
  }

}
