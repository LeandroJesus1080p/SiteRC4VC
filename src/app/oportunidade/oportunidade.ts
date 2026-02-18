import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-oportunidade',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './oportunidade.html',
})
export class Oportunidade {
  motivosOceanoAzul = [
    {
      destaque: 'Baixa Penetração:',
      texto: 'diferente do auto e saúde o RCP ainda é muito pouco explorado.'
    },
    {
      destaque: 'Aumento da judicialização no Brasil:',
      texto: 'hoje existem mais processos contra médicos do que médicos em atividade.'
    },
    {
      destaque: 'Rentabilidade:',
      texto: 'esse é um ramo onde não há briga por preço.'
    },
    {
      destaque: 'Proteção da sua carteira:',
      texto: 'se você não oferecer, outro corretor oferecerá ao seu cliente.'
    },
    {
      destaque: 'Cross-selling:',
      texto: 'dentro da sua carteira de clientes em outros ramos você conseguirá trabalhar o RCP.'
    }
  ];
  videoPlaying = false;

  playVideo(video: HTMLVideoElement) {
    this.videoPlaying = true;
    video.controls = true;
    video.play();
  }
}
