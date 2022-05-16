import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {

  bebidas = [
    {
      nome: 'Chadon Reserve Brut',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiIt1Y6KXXVZ_p_PUD9AF6gNmiWd_UbI50rg&usqp=CAU',
      valor: 'R$ 154,00',
    },
    {
      nome: 'Falernia Carmenére',
      img: 'https://images.squarespace-cdn.com/content/v1/54249b4ae4b05cf30a4345c0/' +
        '1590428791372-S1GUALU1B6L6VRWIZENH/Falernia+Carmenere+VVE-FC001.jpg?format=1000w',
      valor: 'R$ 143,00',
    },
    {
      nome: 'Coca-Cola',
      img: 'https://felicitapizzaria.chefware.com.br/67/0/0/coca-cola-2-litros.jpg',
      valor: 'R$ 8,00',
    },
    {
      nome: 'Guaraná Antartica',
      img: 'https://http2.mlstatic.com/D_NQ_NP_957233-MLB43118775638_082020-O.jpg',
      valor: 'R$ 6,00',
    },
    {
      nome: 'Suco de Laranja',
      img: 'https://img.elo7.com.br/product/zoom/262F374/adesivo-parede-decoracao-suco-de-laranja-fruta-lanchonete-adesivo-decorativo.jpg',
      valor: 'R$ 14,00',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
