import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaEscolhaAudDocsComponent } from './tela-escolha-aud-docs/tela-escolha-aud-docs.component';
import { TelaFormOcorrenciaComponent } from './tela-form-ocorrencia/tela-form-ocorrencia.component';
import { TelaConsulDocsComponent } from './tela-consul-docs/tela-consul-docs.component';
import { TelaChamadoTecnicoComponent } from './tela-chamado-tecnico/tela-chamado-tecnico.component';
import {FormsModule} from "@angular/forms";
import { RecuperaSenhaComponent } from './recupera-senha/recupera-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaEscolhaAudDocsComponent,
    TelaFormOcorrenciaComponent,
    TelaConsulDocsComponent,
    TelaChamadoTecnicoComponent,
    RecuperaSenhaComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
