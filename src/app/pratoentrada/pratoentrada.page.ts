import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratoentrada',
  templateUrl: './pratoentrada.page.html',
  styleUrls: ['./pratoentrada.page.scss'],
})
export class PratoentradaPage implements OnInit {

  pratosEntrada = [
    {
      nome: 'Canapés',
      img: 'https://acarnequeomundoprefere.com.br/uploads/media/image/758a4c37d534eee45100011f6e5c27dd.jpg',
      valor: 'R$ 15,00',
    },
    {
      nome: 'Tábua de carnes frias',
      img: 'https://img.freepik.com/fotos-gratis/carnes-frias-na-tabua-na-mesa-de-madeira' +
        '-contendo-presunto-salame-mortadela-de-salsicha-e-peru_123827-2011.jpg',
      valor: 'R$ 25,00',
    },
    {
      nome: 'Tabua de Queijos',
      img: 'https://static.wixstatic.com/media/3d6819_244eaa7fbb8948fda70baaef64f769bc~mv2.jpg/v1/fit/w_653%2Ch_671%2Cal_c%2Cq_80/file.jpg',
      valor: 'R$ 20,00',
    },
    {
      nome: 'Azeitonas',
      img: 'https://static1.conquistesuavida.com.br/articles/9/83/09/@/26084-azeitonas-verdes-e-pretas-se-tratam-de-u-600x315-2.jpg',
      valor: 'R$ 8,00',
    },
    {
      nome: 'Patês',
      img: 'https://guiadacozinha.com.br/wp-content/uploads/2020/11/pate-de-cebola.jpg',
      valor: 'R$ 12,00',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
