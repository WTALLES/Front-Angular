import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TelaLoginComponent} from "./tela-login/tela-login.component";
import {TelaEscolhaAudDocsComponent} from "./tela-escolha-aud-docs/tela-escolha-aud-docs.component";
import {TelaFormOcorrenciaComponent} from "./tela-form-ocorrencia/tela-form-ocorrencia.component";
import {TelaConsulDocsComponent} from "./tela-consul-docs/tela-consul-docs.component";
import {TelaChamadoTecnicoComponent} from "./tela-chamado-tecnico/tela-chamado-tecnico.component";
import { RecuperaSenhaComponent } from './recupera-senha/recupera-senha.component';
import {HomeComponent} from "./home/home.component";
import {MenuLateralComponent} from "./layout/menu-lateral/menu-lateral.component";
import {NavBarComponent} from "./layout/nav-bar/nav-bar.component";
import {TesteComponent} from "./teste/teste.component";
import {TestePdfComponent} from "./teste-pdf/teste-pdf.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ModelComponent} from "./model/model.component";


const routes: Routes = [
  {path: 'login', component:TelaLoginComponent},
  {path:'module', component:ModelComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component:HomeComponent,
    children:[
      {path: '', redirectTo:'dashboard', pathMatch: 'full'},
      {path:'dashboard', component:DashboardComponent},
      {path:'formularioOcorrencia', component:TelaFormOcorrenciaComponent},
      {path:'monitoria', component:TelaConsulDocsComponent},

    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
