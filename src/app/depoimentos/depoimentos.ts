import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  text: string;

  highlight?: boolean;
}

@Component({
  selector: 'app-depoimentos',
  imports: [CommonModule],
  templateUrl: './depoimentos.html',
})
export class Depoimentos implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      text: "Trabalhar com a RC4VC trouxe uma agilidade que não encontrava em outras assessorias. O processo é fluido, sem burocracia, e o atendimento é humano. Recomendo para qualquer corretor que queira escalar suas vendas de RCP.",
      highlight: false
    },
    {
      text: "O que diferencia a RC4VC é o domínio técnico sobre o Seguro de RCP. Eles realmente conhecem as minúcias do mercado e transmitem a segurança necessária para fecharmos negócios complexos com tranquilidade.",
      highlight: true
    },
    {
      text: "A RC4VC foi a parceira fundamental para me inserir no mercado de Responsabilidade Civil de forma qualificada. Com o apoio deles, passei de um corretor generalista a um especialista respeitado pelos meus clientes.",
      highlight: false
    },
    {
      text: "Mais do que assessoria, a RC4VC é um braço direito. A equipe está sempre pronta para tirar dúvidas e ajudar na argumentação de vendas. É a parceria que todo corretor busca para crescer com segurança",
      highlight: false
    },

  ];

  currentSlide = 0;
  itemsVisible = 3;
  private intervalId: any;

  ngOnInit() {
    this.checkScreenSize();
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.itemsVisible = window.innerWidth < 768 ? 1 : 3;
    const maxSlide = this.testimonials.length - this.itemsVisible;
    if (this.currentSlide > maxSlide) {
      this.currentSlide = maxSlide;
    }
  }

  prev() {
    this.stopAutoPlay();
    const maxSlide = this.testimonials.length - this.itemsVisible;
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : maxSlide;
    this.startAutoPlay();
  }

  next() {
    this.stopAutoPlay();
    const maxSlide = this.testimonials.length - this.itemsVisible;
    const nextSlide = (this.currentSlide < maxSlide) ? this.currentSlide + 1 : 0;

    this.currentSlide = nextSlide;

    this.startAutoPlay();
  }

  goToSlide(index: number) {
    this.stopAutoPlay();
    const maxSlide = this.testimonials.length - this.itemsVisible;
    if (index <= maxSlide) {
      this.currentSlide = index;
    }
    this.startAutoPlay();
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
