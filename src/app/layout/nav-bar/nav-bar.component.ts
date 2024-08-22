import { Component } from '@angular/core';
import {MenuLateralService} from "../../menu-lateral.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private menuLateralService: MenuLateralService) {}

  toggleSidebar() {
    // Check if the button click event is registered
    this.menuLateralService.toggleSidebar();
    // Check if the visibility state is changing
  }
}
