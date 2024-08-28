import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {
  @Output() evento = new EventEmitter<string>();

  confirmaDoc(){
    this.evento.emit("teste");
    alert("pego");
  }
}
