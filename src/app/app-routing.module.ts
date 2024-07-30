import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TelaLoginComponent} from "./tela-login/tela-login.component";
import {TelaEscolhaAudDocsComponent} from "./tela-escolha-aud-docs/tela-escolha-aud-docs.component";
import {TelaFormOcorrenciaComponent} from "./tela-form-ocorrencia/tela-form-ocorrencia.component";
import {TelaConsulDocsComponent} from "./tela-consul-docs/tela-consul-docs.component";
import {TelaChamadoTecnicoComponent} from "./tela-chamado-tecnico/tela-chamado-tecnico.component";
import { RecuperaSenhaComponent } from './recupera-senha/recupera-senha.component';

const routes: Routes = [
  {path: 'login', component:TelaLoginComponent},
  {path:'t1',component:TelaEscolhaAudDocsComponent},
  {path:'t2', component: TelaFormOcorrenciaComponent},
  {path:'t3', component:TelaConsulDocsComponent},
  {path:'t4',component:TelaChamadoTecnicoComponent},
  {path: 'rec', component:RecuperaSenhaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
