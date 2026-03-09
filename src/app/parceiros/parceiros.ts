import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  imports: [CommonModule],
  templateUrl: './parceiros.html',
})
export class Parceiros implements AfterViewInit, OnDestroy {
  @ViewChild('carouselCorretoras') carouselCorretoras!: ElementRef<HTMLDivElement>;
  @ViewChild('carouselSeguradoras') carouselSeguradoras!: ElementRef<HTMLDivElement>;

  private intervalId: any;
  corretorasCurrentSlide = 0;
  seguradorasCurrentSlide = 0;

  corretoras = [
    { nome: 'Sicoob', logoUrl: 'imgs/corretores/sicoob.png' },
    { nome: 'Warren', logoUrl: 'imgs/corretores/warren.svg' },
    { nome: 'CAAES', logoUrl: 'imgs/corretores/caaes.png' },
    { nome: 'Odonto Pay', logoUrl: 'imgs/corretores/odontopay.png' },
    { nome: 'ABORL', logoUrl: 'imgs/corretores/aborl.png' },
    { nome: 'CASAG', logoUrl: 'imgs/corretores/casag.png' },
    { nome: 'APM', logoUrl: 'imgs/corretores/apm.png' },
    { nome: 'PLT', logoUrl: 'imgs/corretores/plt.svg' },
    { nome: 'Grupo Legado', logoUrl: 'imgs/corretores/grupo-legado.png' },
    { nome: 'Addmoney', logoUrl: 'imgs/corretores/addmoney.png' },
    { nome: 'Outlier', logoUrl: 'imgs/corretores/outlier.png' }
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

  get allSeguradoras() {
    return [
      ...this.seguradorasRow1.map(s => ({ ...s, sizeClass: 'h-14 w-36 py-2' })),
      ...this.seguradorasRow2.map(s => ({ ...s, sizeClass: 'h-12 w-32 py-2' })),
      ...this.seguradorasRow3.map(s => ({ ...s, sizeClass: 'h-12 w-32 py-2' }))
    ];
  }

  ngAfterViewInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.scrollNext(this.carouselCorretoras?.nativeElement);
      this.scrollNext(this.carouselSeguradoras?.nativeElement);
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

      const scrollAmount = el.clientWidth; // Rola exatamente a largura visível (1 imagem por vez)

      if (scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' }); // Volta ao início
      } else {
        el.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
      }
    }
  }

  onScrollCorretoras(event: Event) {
    const el = event.target as HTMLDivElement;
    if (el.clientWidth) {
      this.corretorasCurrentSlide = Math.round(el.scrollLeft / el.clientWidth);
    }
  }

  onScrollSeguradoras(event: Event) {
    const el = event.target as HTMLDivElement;
    if (el.clientWidth) {
      this.seguradorasCurrentSlide = Math.round(el.scrollLeft / el.clientWidth);
    }
  }

  goToCorretora(index: number) {
    if (this.carouselCorretoras?.nativeElement) {
      this.carouselCorretoras.nativeElement.scrollTo({ left: index * this.carouselCorretoras.nativeElement.clientWidth, behavior: 'smooth' });
      this.stopCarousel();
      this.startCarousel();
    }
  }

  goToSeguradora(index: number) {
    if (this.carouselSeguradoras?.nativeElement) {
      this.carouselSeguradoras.nativeElement.scrollTo({ left: index * this.carouselSeguradoras.nativeElement.clientWidth, behavior: 'smooth' });
      this.stopCarousel();
      this.startCarousel();
    }
  }
}
