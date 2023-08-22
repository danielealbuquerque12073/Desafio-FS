import { Router, ActivatedRoute } from '@angular/router';
import { FornecedorService } from './../fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../fornecedor.model';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {

  fornecedor: Fornecedor;

  constructor(
    private fornecedorService: FornecedorService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.fornecedorService.readById(id).subscribe(fornecedor => {
      this.fornecedor = fornecedor
    })
  }

  updateFornecedor():void {
    this.fornecedorService.update(this.fornecedor).subscribe(()=>{
      this.fornecedorService.showMensage('Fornecedor atualizado com sucesso')
      this.router.navigate(['/fornecedor']);
    });
  }

  cancel():void {
    this.router.navigate(['/fornecedor'])
  }
}
