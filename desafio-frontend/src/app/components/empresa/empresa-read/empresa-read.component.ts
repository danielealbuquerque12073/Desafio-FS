import { EmpresaService } from './../empresa.service';
import { Empresa } from './../empresa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-read',
  templateUrl: './empresa-read.component.html',
  styleUrls: ['./empresa-read.component.css']
})
export class EmpresaReadComponent implements OnInit {

  empresa: Empresa[]
  displayedColumns = ['id', 'name', 'cnpj', 'cep', 'action']

  constructor(private empresaService: EmpresaService) {
    this.empresaService.read().subscribe(empresa => {
      this.empresa = empresa
      console.log(empresa)
    })
   }

  ngOnInit(): void {

  }

}
