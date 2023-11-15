import { Component, OnInit } from '@angular/core';
import { DepartamentosJsonService } from '../Departamentos-json.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jsonDepartamentos: any;
  filteredDepartamentos: any;
  nombreDepartamento: string = '';
  listaDepartamentos: Set<string> = new Set();

  constructor(private jsonDepartamentosService: DepartamentosJsonService) {}

  ngOnInit() {
    this.jsonDepartamentosService.getJsonDepartamentos().subscribe((data: any) => {
      this.jsonDepartamentos = data;

      this.listaDepartamentos = new Set(this.jsonDepartamentos.map((departamento: any) => departamento.departamento));

      this.filteredDepartamentos = this.jsonDepartamentos;
    });
  }

  filterDepartamentos() {
    this.filteredDepartamentos = this.jsonDepartamentos.filter((departamento: any) => {
      const nombreMatches = departamento.departamento.toLowerCase().includes(this.nombreDepartamento.toLowerCase());
      const departamentoMatches = this.nombreDepartamento === '' || departamento.departamento === this.nombreDepartamento;
      return nombreMatches && departamentoMatches;
    });
  }

  getlistaDepartamentos(): string[] {
    return Array.from(this.listaDepartamentos);
  }
}
