import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaService } from './../empresa.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa.model';

@Component({
  selector: 'app-empresa-update',
  templateUrl: './empresa-update.component.html',
  styleUrls: ['./empresa-update.component.css']
})
export class EmpresaUpdateComponent implements OnInit {

  empresa: Empresa;

  constructor(
    private empresaService: EmpresaService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.empresaService.readById(id).subscribe(empresa => {
      this.empresa = empresa
    })
  }

  updateEmpresa():void {
    this.empresaService.update(this.empresa).subscribe(()=>{
      this.empresaService.showMensage('Empresa atualizada com sucesso')
      this.router.navigate(['/empresa']);
    });
  }

  cancel():void {
    this.router.navigate(['/empresa'])
  }
}
