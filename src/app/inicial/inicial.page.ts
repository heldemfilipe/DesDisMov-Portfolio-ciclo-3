import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  appPages = [
    { title: 'Prato do dia', url: 'pratodia', icon: 'sparkles'},
    { title: 'Bebidas', url: 'bebidas', icon: 'beer' },
    { title: 'Lanches', url: 'lanches', icon: 'fast-food' },
    { title: 'Pratos de Refeição', url: 'pratos', icon: 'restaurant' },
    { title: 'Pratos de Entrada', url: 'pratoentrada', icon: 'aperture' },
    { title: 'Sobremesa', url: 'sobremesa', icon: 'ice-cream' },
  ];

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  abrePage(tipo) {
    this.navCtrl.navigateForward('/' + tipo);
  }


  ngOnInit() {
  }


}
