import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaEscolhaAudDocsComponent } from './tela-escolha-aud-docs/tela-escolha-aud-docs.component';
import { TelaFormOcorrenciaComponent } from './tela-form-ocorrencia/tela-form-ocorrencia.component';
import { TelaConsulDocsComponent } from './tela-consul-docs/tela-consul-docs.component';
import { TelaChamadoTecnicoComponent } from './tela-chamado-tecnico/tela-chamado-tecnico.component';
import {FormsModule} from "@angular/forms";
import { RecuperaSenhaComponent } from './recupera-senha/recupera-senha.component';
import { HomeComponent } from './home/home.component';
import {MatDrawerContainer} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import { MenuLateralComponent } from './layout/menu-lateral/menu-lateral.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaEscolhaAudDocsComponent,
    TelaFormOcorrenciaComponent,
    TelaConsulDocsComponent,
    TelaChamadoTecnicoComponent,
    RecuperaSenhaComponent,
    HomeComponent,
    MenuLateralComponent,
    NavBarComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatDrawerContainer,
        MatToolbar,
        MatIcon,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
