import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta-detalhe',
  styleUrl: './cesta-detalhe.css',
  templateUrl: './cesta-detalhe.html',
})
export class CestaDetalhe {
  mensagem: string = ""; 
  cesta: Cesta = new Cesta(null); 
  

  ngOnInit(){
    let json = localStorage.getItem("cesta");
    if(json!=null){
      this.cesta = new Cesta(json);
      this.mensagem = "";
    } else {
      this.mensagem = "Sua cesta esta vazia!";
    }
  }

  remover(codigo: number){
    this.cesta.removerItem(codigo);
    if(this.cesta.itens.length === 0){
      localStorage.removeItem("cesta");
      this.mensagem = "Sua cesta esta vazia!";
    } else {
      localStorage.setItem("cesta", JSON.stringify(this.cesta));
    }
  }


  limpar(){
    localStorage.removeItem("cesta");
    location.href="./promo";
  }





}
