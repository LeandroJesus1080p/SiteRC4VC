import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';


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
export class Dores implements AfterViewInit, OnDestroy {
  @ViewChild('carouselDores') carouselDores!: ElementRef<HTMLDivElement>;

  isMenuOpen: boolean = false;
  isScrolled: boolean = false;

  doresList = [
    'Dificuldade de acesso e cadastro em <span class="font-extrabold">todas as seguradoras</span>',
    '<span class="font-extrabold">Lentidão</span> para cotar em seguradora por seguradora',
    '<span class="font-extrabold">Estudar as condições gerais</span> de cada companhia',
    'Meu backoffice <span class="font-extrabold">não conhece o fluxo do RCP</span>',
    'A seguradora <span class="font-extrabold">não me fornece treinamento</span>',
    'Entender as <span class="font-extrabold">diferenças de coberturas</span> entre as seguradoras'
  ];

  doresCurrentSlide = 0;
  private intervalIdDores: any;

  ngAfterViewInit() {
    this.startCarouselDores();
  }

  ngOnDestroy() {
    this.stopCarouselDores();
  }

  startCarouselDores() {
    if (typeof window !== 'undefined') {
      this.intervalIdDores = setInterval(() => {
        this.scrollNextDores();
      }, 5000);
    }
  }

  stopCarouselDores() {
    if (this.intervalIdDores) {
      clearInterval(this.intervalIdDores);
    }
  }

  scrollNextDores() {
    const el = this.carouselDores?.nativeElement;
    if (el) {
      const scrollAmount = el.clientWidth;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const scrollLeft = el.scrollLeft;

      if (scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' }); // Volta ao início
      } else {
        el.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
      }
    }
  }

  onScrollDores(event: Event) {
    const el = event.target as HTMLDivElement;
    if (el.clientWidth) {
      this.doresCurrentSlide = Math.round(el.scrollLeft / el.clientWidth);
    }
  }

  goToDor(index: number) {
    if (this.carouselDores?.nativeElement) {
      this.carouselDores.nativeElement.scrollTo({ left: index * this.carouselDores.nativeElement.clientWidth, behavior: 'smooth' });
      this.stopCarouselDores();
      this.startCarouselDores();
    }
  }

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
