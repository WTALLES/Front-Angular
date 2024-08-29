import {Component, inject, OnInit, signal} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs";
import {FloatLabelType} from "@angular/material/form-field";
import {Funcionario} from "../../models/funcionario";
import {AuthService} from "../auth.service";
import {AppService} from "../app.service";

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  loginForm: FormGroup;
  funcionarios: Funcionario[] = []
  re: string

  constructor(private fb: FormBuilder, private router: Router, private app: AppService) {}
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  ngOnInit() {
    this.valiLogin()
  }
  valiLogin(){
    this.loginForm = this.fb.group({
      re: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }
  onSubmit() {
  if(this.loginForm.valid){
    this.getApi()
  }
  }
  compararListaComBanco(): void {
    // Percorra a lista e compare com os dados do banco
    for (let item of this.funcionarios) {
      const re = this.loginForm.get('re')?.value;
      const senha = this.loginForm.get('senha')?.value
      if (item.re === re && item.senha == senha) {
       this.navagacao(item.re);
      } else {
        console.log('Nenhum match encontrado');
      }
    }
  }
  getApi() {
    this.app.funcinonario().subscribe(response => {
      this.funcionarios = response;
    })
    this.compararListaComBanco()
  }
  navagacao(re: any){
    this.router.navigate(['/home'], re);
  }

  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
  protected readonly floatLabel = toSignal(
    this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')),
    {initialValue: 'auto'},
  );
}
