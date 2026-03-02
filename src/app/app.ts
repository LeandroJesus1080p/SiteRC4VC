import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navigation } from "./navigation/navigation";
import { Banner } from "./banner/banner";
import { Oportunidade } from "./oportunidade/oportunidade";
import { Diferenciais } from "./diferenciais/diferenciais";
import { Dores } from "./dores/dores";
import { Parceiros } from "./parceiros/parceiros";
import { PerfisParceiros } from "./perfis-parceiros/perfis-parceiros";
import { QuemSomos } from "./quem-somos/quem-somos";
import { Depoimentos } from "./depoimentos/depoimentos";
import { Footer } from "./footer/footer";
import { Formulario } from "./formulario/formulario";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navigation,
    Banner,
    Oportunidade,
    Diferenciais,
    Dores,
    Parceiros,
    PerfisParceiros,
    QuemSomos,
    Depoimentos,
    Footer,
    Formulario
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('SiteRC4VC');
  protected readonly isLoading = signal(true);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (document.readyState === 'complete') {
        this.isLoading.set(false);
      } else {
        window.addEventListener('load', () => {
          this.isLoading.set(false);
        });
      }
    } else {
      this.isLoading.set(false);
    }
  }
}
