import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Empresa } from './empresa.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class EmpresaService {

  baseUrl = "http://localhost:3001/empresa"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMensage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.baseUrl, empresa).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  erroHandler(e : any): Observable<any>{
    this.showMensage('Ocorreu um erro! tente novamente', true)
    return EMPTY
  }

  read(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  readById(id: number): Observable<Empresa> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Empresa>(url).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  update(empresa: Empresa): Observable<Empresa> {
    const url = `${this.baseUrl}/${empresa.id}`
    return this.http.put<Empresa>(url,empresa).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }

  delete(id: number): Observable<Empresa> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Empresa>(url).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    )
  }
}
