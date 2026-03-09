import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-perfis-parceiros',
  imports: [CommonModule],
  templateUrl: './perfis-parceiros.html',
})
export class PerfisParceiros implements AfterViewInit, OnDestroy {
  @ViewChild('carouselPerfis') carouselPerfis!: ElementRef<HTMLDivElement>;

  private intervalId: any;
  perfisCurrentSlide = 0;

  perfis = [
    { titulo: 'Bancos', iconeUrl: 'imgs/icons-quem-parceiro/1.png' },
    { titulo: 'Cooperativas <br> de Crédito', iconeUrl: 'imgs/icons-quem-parceiro/2.png' },
    { titulo: 'Assessorias de <br> Investimentos', iconeUrl: 'imgs/icons-quem-parceiro/3.png' },
    { titulo: 'Associações', iconeUrl: 'imgs/icons-quem-parceiro/4.png' },
    { titulo: 'Entidades <br> de Classe', iconeUrl: 'imgs/icons-quem-parceiro/5.png' },
    { titulo: 'Corretores <br> de Seguros', iconeUrl: 'imgs/icons-quem-parceiro/6.png' },
    { titulo: 'Seguradoras', iconeUrl: 'imgs/icons-quem-parceiro/7.png' }
  ];

  ngAfterViewInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.scrollNext(this.carouselPerfis?.nativeElement);
    }, 5000);
  }

  stopCarousel() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private scrollNext(el: HTMLDivElement | undefined) {
    if (!el) return;

    // Rola sozinho apenas se tiver overflow (indicando mobile/tablet)
    if (el.scrollWidth > el.clientWidth) {
      const scrollLeft = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.clientWidth;

      const scrollAmount = el.clientWidth; // Rola a largura visível (1 card por vez dependendo do layout)

      if (scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' }); // Volta ao início
      } else {
        el.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
      }
    }
  }

  onScrollPerfis(event: Event) {
    const el = event.target as HTMLDivElement;
    if (el.clientWidth) {
      this.perfisCurrentSlide = Math.round(el.scrollLeft / el.clientWidth);
    }
  }

  goToPerfil(index: number) {
    if (this.carouselPerfis?.nativeElement) {
      this.carouselPerfis.nativeElement.scrollTo({ left: index * this.carouselPerfis.nativeElement.clientWidth, behavior: 'smooth' });
      this.stopCarousel();
      this.startCarousel();
    }
  }
}
