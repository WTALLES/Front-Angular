import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Produto} from "../models/produto";
import {Ocorrencia} from "../models/ocorrencia";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  produto: Produto = new Produto();
  comment: Ocorrencia[] = []
  newData: any

  constructor(private http: HttpClient) { }

  api(){
    return  this.http.get<Ocorrencia[]>('http://127.0.0.1:8000/api/ocorrencia/')
  }
  post(newData: any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
     return this.http.post("http://127.0.0.1:8000/api/ocorrencia/?format=json", newData,{headers})
  }
  produtoApi(){
    return  this.http.get<Produto[]>('http://127.0.0.1:8000/api/produto/')
  }
}
