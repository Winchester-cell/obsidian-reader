import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { HamburgerButton } from '../../shared/components/hamburger-button/hamburger-button';

interface NavLinks {
  label: string
  url: string
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, HamburgerButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isOpen = signal(false)

  openMenu() {
    this.isOpen.set(true)
  }

  closeMenu(){
    this.isOpen.set(false)
  }

  navLinks = signal<NavLinks[]>([
    { label: 'Home', url: '/' },
    { label: 'Library', url: '/library' },
    { label: 'About', url: '/about' },
    { label: 'Settings', url: '/settings' },
  ])

}
