import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private url = 'http://127.0.0.1:8000/funcionario/'


  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.url, credentials);
  }

}
