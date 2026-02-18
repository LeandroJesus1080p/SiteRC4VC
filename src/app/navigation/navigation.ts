import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navigation.html',
})
export class Navigation {
  isMenuOpen: boolean = false;
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(sectionId: string) {
    setTimeout(() => {
      this.isMenuOpen = false;
    }, 150);
  }

  // Lista única para alimentar tanto o menu Desktop quanto o Mobile!
  menuItems = [
    { id: 'oportunidade', label: 'OPORTUNIDADE' },
    { id: 'diferenciais', label: 'DIFERENCIAIS' },
    { id: 'parceiros', label: 'PARCEIROS' },
    { id: 'quem-somos', label: 'QUEM SOMOS' }
  ];

}
