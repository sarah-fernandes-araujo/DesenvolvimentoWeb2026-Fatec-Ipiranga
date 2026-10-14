import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta as ModeloCesta } from '../model/cesta';
import { ItemCesta } from '../model/item-cesta';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css'
})
export class Cesta {
  cesta: ModeloCesta = new ModeloCesta();

  constructor() {
    // Primeiro item: Martelo
    let p1 = new Produto();
    p1.codigo = 1;
    p1.nome = 'Martelo Unha 27mm';
    p1.valor = 49.90;

    let item1 = new ItemCesta();
    item1.produto = p1;
    item1.quantidade = 2;
    item1.valorItem = 99.80;

    this.cesta.itens.push(item1);

    // Segundo item: Chave de Fenda
    let p2 = new Produto();
    p2.codigo = 2;
    p2.nome = 'Chave de Fenda 6mm';
    p2.valor = 18.90;

    let item2 = new ItemCesta();
    item2.produto = p2;
    item2.quantidade = 1;
    item2.valorItem = 18.90;

    this.cesta.itens.push(item2);

    // Terceiro item: Trena
    let p3 = new Produto();
    p3.codigo = 3;
    p3.nome = 'Trena 5 Metros';
    p3.valor = 29.90;

    let item3 = new ItemCesta();
    item3.produto = p3;
    item3.quantidade = 3;
    item3.valorItem = 89.70;

    this.cesta.itens.push(item3);

    // Calculando o valor total somando os subtotais
    this.cesta.valorTotal = 99.80 + 18.90 + 89.70;
  }
}