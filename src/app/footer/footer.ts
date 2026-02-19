import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
})
export class Footer {
  contato = {
    enderecoTexto: 'Rua Itapeva, 490 - Cj 11 - Bela Vista<br>São Paulo - SP - 01332-902',
    enderecoLink: 'https://maps.google.com/?q=Rua+Itapeva+490+Bela+Vista+Sao+Paulo',
    telefone1Texto: '(11) 2359-2834',
    telefone1Link: 'tel:+551123592834',
    telefone2Texto: '(11) 98257-4444',
    telefone2Link: 'https://wa.me/5511982574444',
    emailTexto: 'atendimento@rc4vc.com',
    emailLink: 'mailto:atendimento@rc4vc.com'
  };

  redesSociais = [
    { nome: 'YouTube', url: '#', iconeSvg: '<path d="M23.498 6.186..."/>', classPersonalizada: 'text-xl font-bold' },
    { nome: 'LinkedIn', url: '#', iconeTexto: 'in', classPersonalizada: 'font-bold text-xl' },
    { nome: 'Instagram', url: '#', iconeSvg: '<rect x="2" y="2".../><path d="M16 11.37..."/><line x1="17.5".../>', classPersonalizada: '' },
    { nome: 'Facebook', url: '#', iconeTexto: 'f', classPersonalizada: 'font-bold text-xl' }
  ];
}
