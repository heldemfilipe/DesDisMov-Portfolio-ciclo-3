import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicial', url: 'inicial', icon: 'clipboard' },
    { title: 'Prato do dia', url: 'pratodia', icon: 'sparkles'},
    { title: 'Bebidas', url: 'bebidas', icon: 'beer' },
    { title: 'Lanches', url: 'lanches', icon: 'fast-food' },
    { title: 'Pratos de Refeição', url: 'pratos', icon: 'restaurant' },
    { title: 'Pratos de Entrada', url: 'pratoentrada', icon: 'aperture' },
    { title: 'Sobremesa', url: 'sobremesa', icon: 'ice-cream' },
  ];
}
