import { Router, ActivatedRoute } from "@angular/router";
import { EmpresaService } from "./../empresa.service";
import { Component, OnInit } from "@angular/core";
import { Empresa } from "../empresa.model";

@Component({
  selector: "app-empresa-delete",
  templateUrl: "./empresa-delete.component.html",
  styleUrls: ["./empresa-delete.component.css"],
})
export class EmpresaDeleteComponent implements OnInit {
  empresa: Empresa;

  constructor(
    private empresaService: EmpresaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.empresaService.readById(id).subscribe((empresa) => {
      this.empresa = empresa;
    });
  }

  deleteEmpresa(): void {
    this.empresaService.delete(this.empresa.id).subscribe(() => {
      this.empresaService.showMensage("Empresa excluída com sucesso");
      this.router.navigate(["/empresa"]);
    });
  }

  cancel() {
    this.router.navigate(["/empresa"]);
  }
}
