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
import {TestePdfComponent} from "./teste-pdf/teste-pdf.component";


const routes: Routes = [
  {path: 'login', component:TelaLoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'menu-lateral', component: MenuLateralComponent},
  {path: 'menu', component: NavBarComponent},
  {path:'t1',component:TelaEscolhaAudDocsComponent},
  {path:'t2', component: TelaFormOcorrenciaComponent},
  {path:'t3', component:TelaConsulDocsComponent},
  {path:'t4',component:TelaChamadoTecnicoComponent},
  {path: 'recupera-senha', component: RecuperaSenhaComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'testepdf', component:TestePdfComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
