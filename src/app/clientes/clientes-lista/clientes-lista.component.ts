import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
      private service: ClientesService,
      private router: Router) { }

  ngOnInit(): void {
    this.service.
    getClientes().
    subscribe(
      response => this.clientes = response
    )
  }

  novoCadastro() {
    this.router.navigate(['/clientes-form'])
  }

}
