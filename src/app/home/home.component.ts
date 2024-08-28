import { Component } from '@angular/core';
import {MenuLateralService} from "../menu-lateral.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isSidebarVisible = true;
  constructor(private menuLateralSerivce: MenuLateralService) {}


  ngOnInit() {
    this.menuLateralSerivce.sidebarVisibility$.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });
  }
}
