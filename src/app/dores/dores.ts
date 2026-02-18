import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Testimonial {
  text: string;
  author: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-dores',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './dores.html',
})
export class Dores {

  isMenuOpen: boolean = false;
  isScrolled: boolean = false;

  testimonials: Testimonial[] = [
    {
      text: "Trabalhar com a RC4VC foi um divisor de águas. Mais do que uma plataforma ágil que eu não encontrava em outras assessorias, a RC4VC virou meu braço direito. O domínio técnico deles sobre Seguro de RCP é impressionante.",
      author: "Corretor A",
      highlight: false
    },
    {
      text: "A RC4VC foi a parceira fundamental para me inserir no mercado de Responsabilidade Civil de forma qualificada. Eles realmente conhecem as minúcias do mercado e ajudam no argumento de vendas.",
      author: "Corretora B",
      highlight: true
    },
    {
      text: "O que diferencia a RC4VC é o atendimento humano. A equipe está sempre pronta para tirar dúvidas complexas e transmite a segurança necessária para fecharmos negócios complexos.",
      author: "Corretor C",
      highlight: false
    },
    {
      text: "Trabalhar com a RC4VC foi um divisor de águas. Mais do que uma plataforma ágil que eu não encontrava em outras assessorias, a RC4VC virou meu braço direito. O domínio técnico deles sobre Seguro de RCP é impressionante.",
      author: "Corretor A",
      highlight: false
    },
    {
      text: "A RC4VC foi a parceira fundamental para me inserir no mercado de Responsabilidade Civil de forma qualificada. Eles realmente conhecem as minúcias do mercado e ajudam no argumento de vendas.",
      author: "Corretora B",
      highlight: true
    },
    {
      text: "O que diferencia a RC4VC é o atendimento humano. A equipe está sempre pronta para tirar dúvidas complexas e transmite a segurança necessária para fecharmos negócios complexos.",
      author: "Corretor C",
      highlight: false
    }
  ];
}
