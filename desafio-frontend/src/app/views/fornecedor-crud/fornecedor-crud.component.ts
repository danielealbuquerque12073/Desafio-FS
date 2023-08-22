import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-fornecedor-crud',
  templateUrl: './fornecedor-crud.component.html',
  styleUrls: ['./fornecedor-crud.component.css']
})
export class FornecedorCrudComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  navigateTofornecedorCreate(): void {
    this.router.navigate(['/fornecedor/create'])
  }
}
