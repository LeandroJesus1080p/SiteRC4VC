import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-perfis-parceiros',
  imports: [CommonModule],
  templateUrl: './perfis-parceiros.html',
})
export class PerfisParceiros {
  perfis = [
    { titulo: 'Bancos', iconeUrl: 'imgs/icons-quem-parceiro/1.png' },
    { titulo: 'Cooperativas <br> de Crédito', iconeUrl: 'imgs/icons-quem-parceiro/2.png' },
    { titulo: 'Assessorias de <br> Investimentos', iconeUrl: 'imgs/icons-quem-parceiro/3.png' },
    { titulo: 'Associações', iconeUrl: 'imgs/icons-quem-parceiro/4.png' },
    { titulo: 'Entidades <br> de Classe', iconeUrl: 'imgs/icons-quem-parceiro/5.png' },
    { titulo: 'Corretores <br> de Seguros', iconeUrl: 'imgs/icons-quem-parceiro/6.png' },
    { titulo: 'Seguradoras', iconeUrl: 'imgs/icons-quem-parceiro/7.png' }
  ];
}
