import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremesa',
  templateUrl: './sobremesa.page.html',
  styleUrls: ['./sobremesa.page.scss'],
})
export class SobremesaPage implements OnInit {

  sobremesas = [
    {
      nome: 'Tiramisù',
      img: 'https://italianismo.com.br/wp-content/uploads/2020/11/Tiramisu%CC%80.jpg',
      valor: 'R$ 20,00',
    },
    {
      nome: 'Crème Brûlée',
      img: 'https://www.dicasdemulher.com.br/wp-content/uploads/2018/08/creme-brulee-4.jpg',
      valor: 'R$ 18,00',
    },
    {
      nome: 'Fran’s Grand Gateau',
      img: 'https://www.socialbauru.com.br/wp-content/uploads/2019/09/premioimpera2019-sobremesa-franscafe-850x567.jpg',
      valor: 'R$ 50,00',
    },
    {
      nome: 'Mousse de Chocolate com Gengibre',
      img: 'https://julia.pt/wp-content/uploads/2019/08/Mousse-de-Chocolate-J.jpg',
      valor: 'R$ 25,00',
    },
    {
      nome: 'Cheesecake de Frutas Vermelhas',
      img: 'https://sandradias.com/wp-content/uploads/2021/09/torta-ricota-frutas-vermelhas-sandradias.jpg',
      valor: 'R$ 15,00',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
