import {Component, OnInit, signal} from '@angular/core';
import {Produto} from "../../models/produto";
import {AppService} from "../app.service";
import {Ocorrencia} from "../../models/ocorrencia";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize, map} from "rxjs";
import {onChildChanged} from "@angular/fire/database";
import {MenuLateralService} from "../menu-lateral.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Funcionario} from "../../models/funcionario";
import {Router} from "@angular/router";
import {FloatLabelType} from "@angular/material/form-field";
import {toSignal} from "@angular/core/rxjs-interop";


@Component({
  selector: 'app-tela-consul-docs',
  templateUrl: './tela-consul-docs.component.html',
  styleUrl: './tela-consul-docs.component.css'
})
export class TelaConsulDocsComponent implements OnInit{
  produtos: Produto[] = [];
  produto: Produto = new Produto();
  ocorrencias: Ocorrencia[] = [];
  constructor(private service: AppService, private menuLateralSerivce: MenuLateralService,private fb: FormBuilder) { }

  ngOnInit() {
   this.getApi();
    this.menuLateralSerivce.sidebarVisibility$.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });
    this.valiLogin()
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

  //respansividade em relação ao menu
  isSidebarVisible = true;

  //
  searchForm: FormGroup;
  funcionarios: Funcionario[] = []
  re: string
  ocorrencia: Ocorrencia = new Ocorrencia()
  idselecionado: string
  valid: boolean = false
  valiLogin(){
    this.searchForm = this.fb.group({
      tpOcorrencia: ['', Validators.required],
    });
  }

  compararListaComBanco(): void {
    for (let item of this.ocorrencias) {
      if (item.tpOcorrencia === this.ocorrencia.tpOcorrencia) {
        alert(this.ocorrencia.tpOcorrencia)
        this.idselecionado = this.ocorrencia.tpOcorrencia;
        this.valid = true
      } else {
        console.log('Nenhum match encontrado');
      }
    }
  }

  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
  protected readonly floatLabel = toSignal(
    this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')),
    {initialValue: 'auto'},
  );

}
