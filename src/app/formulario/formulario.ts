import { Component } from '@angular/core';
import { TermosUso } from '../termos-uso/termos-uso';

@Component({
  selector: 'app-formulario',
  imports: [TermosUso],
  templateUrl: './formulario.html',
})
export class Formulario {
  mostrarTermos = false;
  termosAceitos = false;

  aceitarTermos() {
    this.termosAceitos = true;
    this.mostrarTermos = false;
  }
}
