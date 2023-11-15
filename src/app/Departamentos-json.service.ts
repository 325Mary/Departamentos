import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosJsonService {
  constructor(private http: HttpClient) { }

  getJsonDepartamentos(): Observable<any> {
    return this.http.get<any>('https://www.datos.gov.co/resource/xdk5-pm3f.json');
  }
}
