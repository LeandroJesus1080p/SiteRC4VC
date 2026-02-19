import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  imports: [CommonModule],
  templateUrl: './parceiros.html',
})
export class Parceiros {
  corretoras = [
    { nome: 'Warren', logoUrl: 'imgs/corretores/warren.svg' },
    { nome: 'CAAES', logoUrl: 'imgs/corretores/caaes.png' },
    { nome: 'Odonto Pay', logoUrl: 'imgs/corretores/odontopay.png' },
    { nome: 'APM', logoUrl: 'imgs/corretores/apm.png' },
    { nome: 'ABORL', logoUrl: 'imgs/corretores/aborl.png' },
    { nome: 'CASAG', logoUrl: 'imgs/corretores/casag.png' }
  ];

  seguradorasRow1 = [
    { nome: 'Akad', logoUrl: 'imgs/corretores/akadseguros.png' },
    { nome: 'FF Seguros', logoUrl: 'imgs/corretores/ff-seguros.png' },
    { nome: 'Fator', logoUrl: 'imgs/corretores/fator-seguradora.png' },
    { nome: 'Seguros Unimed', logoUrl: 'imgs/corretores/unimed.png' }
  ];

  seguradorasRow2 = [
    { nome: 'Porto Seguro', logoUrl: 'imgs/corretores/porto-seguro.png' },
    { nome: 'Mapfre', logoUrl: 'imgs/corretores/mapfre.png' },
    { nome: 'Chubb', logoUrl: 'imgs/corretores/chubb.webp' },
    { nome: 'Ezze', logoUrl: 'imgs/corretores/ezze.svg' },
    { nome: 'Excelsior', logoUrl: 'imgs/corretores/excelsior.webp' }
  ];

  seguradorasRow3 = [
    { nome: 'AIG', logoUrl: 'imgs/corretores/aig.png' },
    { nome: 'Tokio Marine', logoUrl: 'imgs/corretores/tokio.png' },
    { nome: 'Allianz', logoUrl: 'imgs/corretores/allianz.png' },
    { nome: 'AXA', logoUrl: 'imgs/corretores/axa.png' }
  ];
}
