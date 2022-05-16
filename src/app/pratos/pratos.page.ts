import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.page.html',
  styleUrls: ['./pratos.page.scss'],
})
export class PratosPage implements OnInit {

  pratosRefeicao = [
    {
      nome: 'Strogonoff',
      img: 'https://blog-static.deliway.com.br/assets/base/0f2/c9a/93e/strogonoff.jpg',
      valor: 'R$ 25,00',
    },
    {
      nome: 'Bife à milanesa',
      img: 'https://blog-static.deliway.com.br/assets/base/a3f/b4f/bf9/bife-a-milanesa.jpg',
      valor: 'R$ 50,00',
    },
    {
      nome: 'Bife bovino',
      img: 'https://blog-static.deliway.com.br/assets/base/3eb/71f/629/bife-bovino.jpg',
      valor: 'R$ 35,00',
    },
    {
      nome: 'Filé de frango',
      img: 'https://blog-static.deliway.com.br/assets/base/9da/187/a7a/file-frango.jpg',
      valor: 'R$ 25,00',
    },
    {
      nome: 'Salada da casa',
      img: 'https://blog-static.deliway.com.br/assets/base/a11/3c1/ecd/salada-da-casa.jpg',
      valor: 'R$ 15,00',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
