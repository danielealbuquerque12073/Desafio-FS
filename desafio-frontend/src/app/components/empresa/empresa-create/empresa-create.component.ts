import { Empresa } from './../empresa.model';
import { Router } from '@angular/router';
import { EmpresaService } from './../empresa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.css']
})
export class EmpresaCreateComponent implements OnInit {

  empresa : Empresa = {
    name: '',
    cnpj: null,
    cep: null,
  }

  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit(): void {
  
  }

  createEmpresa(): void {
    this.empresaService.create(this.empresa).subscribe(() => {
      this.empresaService.showMensage('Empresa registrada com sucesso')
      this.router.navigate(['/empresa'])
    })
  }

  cancel(): void {
    this.router.navigate(['/empresa'])
  }

}
