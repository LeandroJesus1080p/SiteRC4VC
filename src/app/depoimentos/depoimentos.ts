import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
  highlight?: boolean;
  expanded?: boolean;
}

@Component({
  selector: 'app-depoimentos',
  imports: [CommonModule],
  templateUrl: './depoimentos.html',
})
export class Depoimentos implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      text: '"Além de ser fácil de encaminhar o cotador para possíveis clientes, de forma clara e educativa, facilitando a decisão do cliente, o suporte completa uma parceria sólida!"',
      name: 'JP Bottecchia',
      role: 'Jplanner Corretora',
      image: 'imgs/depoimentos/JP_Bottecchia.png',
      highlight: false
    },
    {
      text: 'Sou parceiro da RC4VC desde o início do projeto.\n\nUm atendimento de qualidade ao corretor faz toda a diferença para que possamos sempre levar a melhor proteção e a melhor experiência aos nossos clientes.\n\nUma equipe muito bem alinhada e comprometida em dar suporte real aos corretores.\n\nEm todas as reuniões que tenho com outros corretores, sempre faço questão de indicar, pois a ferramenta é extremamente simples e facilita muito para que o cliente visualize e entenda a proteção que está contratando.',
      name: 'Nadimir de Almeida Júnio',
      role: 'Midway Corretora',
      image: 'imgs/depoimentos/Nadimir_de_Almeida_Junior.png',
      highlight: true
    },
    {
      text: 'A RC4VC foi uma mudança significativa nas rotinas comerciais e operacionais de nossa corretora. É o único sistema que permite a comparação entre seguradoras totalmente automatizada e seus diferenciais de forma prática e objetiva em segundos. Qualquer pessoa leiga se torna um especialista em RC usando o sistema RC4VC. Usamos e recomendamos a todos os nossos parceiros da Plataforma AddMoney.',
      name: 'Paulo André',
      role: 'Addmoney Assessoria',
      image: 'imgs/depoimentos/Paulo_Andre.png',
      highlight: false
    },
    {
      text: 'Ter a RC4VC como parceira, com toda certeza foi um diferencial. Sua ajuda na apresentação de comparativos e acompanhamento operacional, trás muita segurança na consultoria e venda de RC.',
      name: 'Sunamita Freitas',
      role: 'Vilani Seguros',
      image: 'imgs/depoimentos/Sumanita.png',
      highlight: false
    },
    {
      text: '"A plataforma da RC4VC foi algo inovador no mercado. Intuitiva e fácil, torna o trabalho de cotação e comparação extremamente ágil.\nAlém é claro de contar com um time de BO que auxilia muito nas demandas do dia a dia”',
      name: 'Cauê Valença',
      role: 'Grupo Capital',
      image: 'imgs/depoimentos/Caue.png',
      highlight: false
    }
  ];

  currentSlide = 0;
  itemsVisible = 3;
  isExpanded = false; // Desktop global expand
  expandedIndex: number | null = null; // Mobile individual expand
  isMobile = false;
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
    this.isMobile = window.innerWidth < 768;
    this.itemsVisible = this.isMobile ? 1 : 3;

    // Reset validations on screen size change
    if (!this.isMobile) {
      this.expandedIndex = null;
      this.testimonials.forEach(t => t.expanded = false);
    } else {
      this.isExpanded = false;
    }

    const maxSlide = this.testimonials.length - this.itemsVisible;
    if (this.currentSlide > maxSlide) {
      this.currentSlide = maxSlide;
    }
  }

  prev() {
    this.stopAutoPlay();
    this.resetExpanded();
    const maxSlide = this.testimonials.length - this.itemsVisible;
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : maxSlide;
    this.startAutoPlay();
  }

  next() {
    this.stopAutoPlay();
    this.resetExpanded();
    const maxSlide = this.testimonials.length - this.itemsVisible;
    const nextSlide = (this.currentSlide < maxSlide) ? this.currentSlide + 1 : 0;

    this.currentSlide = nextSlide;

    this.startAutoPlay();
  }

  goToSlide(index: number) {
    this.stopAutoPlay();
    this.resetExpanded();
    const maxSlide = this.testimonials.length - this.itemsVisible;
    if (index <= maxSlide) {
      this.currentSlide = index;
    }
    this.startAutoPlay();
  }

  resetExpanded() {
    if (this.isMobile) {
      this.expandedIndex = null;
      this.testimonials.forEach(t => t.expanded = false);
    }
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.intervalId = setInterval(() => {
      this.next();
    }, 10000);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleExpand(index: number) {
    if (this.isMobile) {
      // Toggle individual para mobile
      if (this.expandedIndex === index) {
        this.expandedIndex = null;
        this.testimonials[index].expanded = false;
      } else {
        // Fecha os outros e abre o atual
        if (this.expandedIndex !== null) {
          this.testimonials[this.expandedIndex].expanded = false;
        }
        this.expandedIndex = index;
        this.testimonials[index].expanded = true;
      }
    } else {
      // Toggle global para desktop
      this.isExpanded = !this.isExpanded;
    }
  }
}
