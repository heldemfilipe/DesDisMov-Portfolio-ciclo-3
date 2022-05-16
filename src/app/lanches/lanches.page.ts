import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {

  lanches = [
    {
      nome: 'Hamburguer Simples',
      img:
        'https://s2.glbimg.com/MAWf6GSmHzt9xu9iXWKQhwBiPMo=/0x0:5078x2833/984x0/smart/filters:strip_icc()/i.s3.glbimg.com' +
        '/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/p/C/n3R1mfQCe0hNFjedQ6Ow/' +
        'hamburguer-e-sempre-uma-otima-opcao.jpg',
      valor: 'R$ 22,00',
    },
    {
      nome: 'X-Tudo',
      img: 'https://loja.catalogoechosis.com.br/assets/images/products/2fa67f482133f1c934235b73c2a03954.jpg?1596229675',
      valor: 'R$ 35,00',
    },
    {
      nome: 'Hamburguer de Frango',
      img:
        'https://conteudo.imguol.com.br/c/entretenimento/26/2020/10/06/hambuguer-de-frango---churrasqueadas-1602015731299_v2_450x450.jpg',
      valor: 'R$ 18,00',
    },
    {
      nome: 'Cachorro Quente',
      img: 'https://img.itdg.com.br/tdg/images/recipes/000/119/770/357545/357545_original.jpg?mode=crop&width=710&height=400',
      valor: 'R$ 15,00',
    },
    {
      nome: 'Misto Quente',
      img: 'https://pantuccipanificadora.com.br/wp-content/uploads/2021/04/misto-quente-receita-1_Easy-Resize.com_.jpg',
      valor: 'R$ 10,00',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
