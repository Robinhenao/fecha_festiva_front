import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FestivoDto } from '../entities/festivo-dto';

@Injectable({
  providedIn: 'root'
})
export class FestivosService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `http://localhost:8080/festivos`;
  }

  public verificarFecha(fecha: Date) {
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getUTCDate();
    let urlT = `${this.url}/verificar/${año}/${mes}/${dia}`;
    return this.http.get(urlT, { responseType: 'text' });
  }

  public obtenerFestivos(year: number): Observable<FestivoDto[]> {
    let urlT = `${this.url}/obtener/${year}`;
    return this.http.get<FestivoDto[]>(urlT);
  }

}
