import { Router, ActivatedRoute } from "@angular/router";
import { FornecedorService } from "./../fornecedor.service";
import { Component, OnInit } from "@angular/core";
import { Fornecedor } from "../fornecedor.model";

@Component({
  selector: "app-fornecedor-delete",
  templateUrl: "./fornecedor-delete.component.html",
  styleUrls: ["./fornecedor-delete.component.css"],
})
export class FornecedorDeleteComponent implements OnInit {
  fornecedor: Fornecedor;

  constructor(
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fornecedorService.readById(id).subscribe((fornecedor) => {
      this.fornecedor = fornecedor;
    });
  }

  deleteFornecedor(): void {
    this.fornecedorService.delete(this.fornecedor.id).subscribe(() => {
      this.fornecedorService.showMensage("Fornecedor excluído com sucesso");
      this.router.navigate(["/fornecedor"]);
    });
  }

  cancel() {
    this.router.navigate(["/fornecedor"]);
  }
}
