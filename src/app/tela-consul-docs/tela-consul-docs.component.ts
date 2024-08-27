import {Component, OnInit} from '@angular/core';
import {Produto} from "../../models/produto";
import {AppService} from "../app.service";
import {Ocorrencia} from "../../models/ocorrencia";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {onChildChanged} from "@angular/fire/database";


@Component({
  selector: 'app-tela-consul-docs',
  templateUrl: './tela-consul-docs.component.html',
  styleUrl: './tela-consul-docs.component.css'
})
export class TelaConsulDocsComponent implements OnInit{
  produtos: Produto[] = [];
  produto: Produto = new Produto();
  ocorrencias: Ocorrencia[] = [];
  constructor(private service: AppService) { }

  ngOnInit() {
   this.getApi()
  }

  getApi(){
    this.service.api().subscribe(response => {
        this.ocorrencias = response},
      error => {console.log(error)});
    this.getProduto();
  }
  getProduto(){
    this.service.produtoApi().subscribe(response => {
      this.produtos = response},
      error => {console.log(error)});
  }


}
