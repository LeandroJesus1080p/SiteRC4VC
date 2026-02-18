import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './quem-somos.html',
})
export class QuemSomos {
  fundadores = [
    {
      nome: 'Fábio Alves',
      fotoUrl: 'imgs/pessoas/fabio.png',
      fotoPlaceholder: '📸 Foto <br> Fábio Alves',
      linha1: 'Corretor há 15 anos',
      linha2: 'Formação em TI',
      linha3: 'imgs/pessoas/48.png',
      linkedinUrl: 'https://www.linkedin.com/in/f%C3%A1bio-alves-41402a42/'
    },
    {
      nome: 'Márcio Gomes',
      fotoUrl: 'imgs/pessoas/marcio.png',
      fotoPlaceholder: '📸 Foto <br> Márcio Gomes',
      linha1: 'Corretor há 24 anos',
      linha2: 'Advogado',
      linha3: 'Founder RC4VC',
      linkedinUrl: 'https://www.linkedin.com/in/marcio-da-silva-gomes-comercial/?originalSubdomain=br'
    }
  ];
}
