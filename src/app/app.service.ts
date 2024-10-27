import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Produto} from "../models/produto";
import {Ocorrencia} from "../models/ocorrencia";
import {Funcionario} from "../models/funcionario";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public tpOcorrencia: string = ''

  constructor(private http: HttpClient) { }

  api(){
    return  this.http.get<Ocorrencia[]>('http://127.0.0.1:8000/ocorrencia/')
  }
  post(newData: any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
     return this.http.post("http://127.0.0.1:8000/ocorrencia/?format=json", newData,{headers})
  }
  produtoApi(){
    return  this.http.get<Produto[]>('http://127.0.0.1:8000/produto/')
  }
  funcinonario(){
    return this.http.get<Funcionario[]>('http://127.0.0.1:8000/funcionario/')
  }
  filtro(tpOcorrencia: string){
     return this.http.get<Ocorrencia[]>('http://127.0.0.1:8000/ocorrencia/?tpOcorrencia=' + tpOcorrencia)
  }
}
