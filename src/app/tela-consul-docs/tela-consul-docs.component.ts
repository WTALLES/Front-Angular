import {Component, OnInit} from '@angular/core';
import {Produto} from "../../models/produto";
import {AppService} from "../app.service";

@Component({
  selector: 'app-tela-consul-docs',
  templateUrl: './tela-consul-docs.component.html',
  styleUrl: './tela-consul-docs.component.css'
})
export class TelaConsulDocsComponent implements OnInit{
  produtos: Produto[] = [];
  constructor(private service: AppService) { }

  ngOnInit() {
   this.getApi()
  }

  getApi(){
    this.service.api().subscribe(response => {
        this.produtos = response},
      error => {console.log(error)});

  }


}
