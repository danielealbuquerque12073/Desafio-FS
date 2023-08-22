import { FornecedorService } from './../fornecedor.service';
import { Fornecedor } from './../fornecedor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent implements OnInit {

  fornecedor: Fornecedor[]
  displayedColumns = ['id', 'name', 'email', 'cnpj', 'cep', 'action']

  constructor(private fornecedorService: FornecedorService) {
    this.fornecedorService.read().subscribe(fornecedor => {
      this.fornecedor = fornecedor
      console.log(fornecedor)
    })
   }

  ngOnInit(): void {

  }

}
