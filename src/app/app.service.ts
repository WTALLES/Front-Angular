import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Produto} from "../models/produto";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  produto: Produto = new Produto();
  produtos: Produto[] = [];
  constructor(private http: HttpClient) { }

  api(){
    return  this.http.get<Produto[]>('http://127.0.0.1:8000/api/produto/')
  }
}
