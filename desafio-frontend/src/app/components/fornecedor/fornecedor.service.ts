import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Fornecedor } from './fornecedor.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class FornecedorService {

  baseUrl = "http://localhost:3001/fornecedor"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMensage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.baseUrl, fornecedor).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  erroHandler(e : any): Observable<any>{
    this.showMensage('Ocorreu um erro! tente novamente', true)
    return EMPTY
  }

  read(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  readById(id: number): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Fornecedor>(url).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  update(fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${fornecedor.id}`
    return this.http.put<Fornecedor>(url,fornecedor).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  delete(id: number): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Fornecedor>(url).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }
}
