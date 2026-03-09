import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-diferenciais',
  imports: [],
  templateUrl: './diferenciais.html',
})
export class Diferenciais implements AfterViewInit, OnDestroy {
  @ViewChild('carouselTecnologia') carouselTecnologia!: ElementRef<HTMLDivElement>;
  @ViewChild('carouselAssessoria') carouselAssessoria!: ElementRef<HTMLDivElement>;

  private intervalId: any;
  tecCurrentSlide = 0;
  assCurrentSlide = 0;

  tecnologias = [
    { icone: 'imgs/icons/41.png', titulo: 'Cotador' },
    { icone: 'imgs/icons/42.png', titulo: 'CRM' },
    { icone: 'imgs/icons/45.png', titulo: 'White Label' },
    { icone: 'imgs/icons/43.png', titulo: 'Cotação em <br> menos de <br> 1 minuto' }
  ];

  assessorias = [
    { icone: 'imgs/icons/40.png', titulo: 'Assessoria <br> Jurídica' },
    { icone: 'imgs/icons/39.png', titulo: 'Assessoria <br> de Marketing' },
    { icone: 'imgs/icons/38.png', titulo: 'Venda e <br> Renovação <br> Assistida' },
    { icone: 'imgs/icons/37.png', titulo: 'Treinamento <br> e Suporte' }
  ];

  ngAfterViewInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.scrollNext(this.carouselTecnologia?.nativeElement);
      this.scrollNext(this.carouselAssessoria?.nativeElement);
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

      const scrollAmount = el.clientWidth; // Rola exatamente a largura visível (1 item por vez)

      if (scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' }); // Volta ao início
      } else {
        el.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
      }
    }
  }

  onScrollTec(event: Event) {
    const el = event.target as HTMLDivElement;
    if (el.clientWidth) {
      this.tecCurrentSlide = Math.round(el.scrollLeft / el.clientWidth);
    }
  }

  onScrollAss(event: Event) {
    const el = event.target as HTMLDivElement;
    if (el.clientWidth) {
      this.assCurrentSlide = Math.round(el.scrollLeft / el.clientWidth);
    }
  }

  goToTec(index: number) {
    if (this.carouselTecnologia?.nativeElement) {
      this.carouselTecnologia.nativeElement.scrollTo({ left: index * this.carouselTecnologia.nativeElement.clientWidth, behavior: 'smooth' });
      this.stopCarousel();
      this.startCarousel();
    }
  }

  goToAss(index: number) {
    if (this.carouselAssessoria?.nativeElement) {
      this.carouselAssessoria.nativeElement.scrollTo({ left: index * this.carouselAssessoria.nativeElement.clientWidth, behavior: 'smooth' });
      this.stopCarousel();
      this.startCarousel();
    }
  }
}
