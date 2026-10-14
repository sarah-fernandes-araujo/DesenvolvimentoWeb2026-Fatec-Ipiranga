import { Component } from '@angular/core';
import { Topo } from '../topo/topo';
import { Menu } from '../menu/menu';
import { BarraBusca } from '../barra-busca/barra-busca';
import { Rodape } from '../rodape/rodape';

@Component({
  selector: 'app-home',
  imports: [Topo, Menu, BarraBusca, Rodape],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}