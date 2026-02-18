import { Component, signal } from '@angular/core';
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
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SiteRC4VC');
}
