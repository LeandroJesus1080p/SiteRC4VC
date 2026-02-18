import { Component } from '@angular/core';

@Component({
  selector: 'app-diferenciais',
  imports: [],
  templateUrl: './diferenciais.html',
})
export class Diferenciais {
  tecnologias = [
    { icone: 'imgs/icons/41.png', titulo: 'Cotador' },
    { icone: 'imgs/icons/42.png', titulo: 'CRM' },
    { icone: 'imgs/icons/45.png', titulo: 'White Label' },
    { icone: 'imgs/icons/43.png', titulo: 'Cotação em <br> menos de 1 min' }
  ];

  assessorias = [
    { icone: 'imgs/icons/40.png', titulo: 'Assessoria <br> Jurídica' },
    { icone: 'imgs/icons/39.png', titulo: 'Assessoria <br> de Marketing' },
    { icone: 'imgs/icons/38.png', titulo: 'Venda e <br> Renovação' },
    { icone: 'imgs/icons/37.png', titulo: 'Treinamento <br> e Suporte' }
  ];
}
