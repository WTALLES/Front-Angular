import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  autorizado = false
  constructor(private authLoginService: AuthLoginService) { }

  autorizar(){
    this.autorizado = true;
  }

}
