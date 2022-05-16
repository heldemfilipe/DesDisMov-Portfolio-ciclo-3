import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratodia',
  templateUrl: './pratodia.page.html',
  styleUrls: ['./pratodia.page.scss'],
})
export class PratodiaPage implements OnInit {

  pratodia = [
    {
      nome: 'Tabua de Queijos',
      img: 'https://static.wixstatic.com/media/3d6819_244eaa7fbb8948fda70baaef64f769bc~mv2.jpg/v1/fit/w_653%2Ch_671%2Cal_c%2Cq_80/file.jpg',
      descricao: 'Tabua de queijo com três tipos de queijos, queijo Brie, queijo gouda, gorgonzola,' +
      ' além de lombo, salame italiano, azeitonas sem caroço, uvas verdes ou roxas, bacon e presunto.',
    },
    {
      nome: 'Bife à milanesa',
      img: 'https://blog-static.deliway.com.br/assets/base/a3f/b4f/bf9/bife-a-milanesa.jpg',
      descricao:'Inspirado na popular receita austríaca de Wiener Schnitzel.',
    },
    {
      nome: 'Fran’s Grand Gateau',
      img: 'https://www.socialbauru.com.br/wp-content/uploads/2019/09/premioimpera2019-sobremesa-franscafe-850x567.jpg',
      descricao:
        'Bolo mousse cremoso de chocolate, calda de chocolate com leve toque de café,' +
        'acompanhado de Fran’s gelato de pistache, farofa crocante e chantilly.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
